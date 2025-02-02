# python imports
import gc
import logger
import machine
from machine import Pin, I2C
import micropython
import network
from pycom import rgbled
import sys
import time
import uos

# own code imports
import webserver
from config import Config
from sensors import hx711, bme280, ssd1306, ds1820
from wlanmanager import WLanManager

from lib.onewire import OneWire


print('Start -> logger')
_csv  = logger.csv

# Log method
def log(message):
    if _csv is not None:
        _csv.log(message)
    else:
        print(message)

# Change color of LED only if P2 not in Use for AP
def rgb_led(rgb):
    if not (
        _config.get_value("general", "general", "button_ap_enabled")
        and _config.get_value("general", "general", "button_ap_pin") == 2
    ):
        rgbled(rgb)

# needed for boards without buttons
reset_causes = {
    machine.PWRON_RESET: 'PWRON', # Press reset button on FiPy
    machine.HARD_RESET: 'HARD',
    machine.WDT_RESET: 'WDT', # Upload and restart from USB or machine.reset()
    machine.DEEPSLEEP_RESET: 'DEEPSLEEP',
    machine.SOFT_RESET: 'SOFT',
    machine.BROWN_OUT_RESET: 'BROWN_OUT'
}

# init
_config = Config.getInstance()
_ds_positions = {v: k for k, v in
                 _config.get_value('sensors', 'ds1820', 'positions').items()}
if "" in _ds_positions.keys():
    _ds_positions.pop("") # M. Ruemmler: remove the standard configuration to reduce error
_wm = WLanManager(_config)
_wlan = network.WLAN(id=0)


measurement_interval = _config.get_value('general', 'general', 'measurement_interval')

#set up watchdog, on start timeout only after 1min
wdt = machine.WDT(timeout=60*1000)

loop_run = True
cycle = 0
crcerrcnt = 0

oled = _config.get_value('general', 'general', 'oled')
if oled:
    i2c = I2C(0, I2C.MASTER, pins=('P9', 'P10'))       # PyCom FiPy
    _oled = SSD1306_I2C(128, 64, i2c)           # x, y, bus
    _oled.fill(0)
    _oled.show()


print('Start -> Info:', end = ' ')
log(uos.uname())


def register_ap_button_callback():
    if _config.get_value('general', 'general', 'button_ap_enabled'):
        global button_ap
        ap_pin = _config.get_value('general', 'general', 'button_ap_pin')
        button_ap = machine.Pin(ap_pin, mode=machine.Pin.IN, pull=machine.Pin.PULL_UP)
        print("Access Point Pin {0} set.".format(ap_pin))
        button_ap.callback(machine.Pin.IRQ_FALLING,
                        handler=enable_ap)
        print("Callback registered...")

# added by Max Rümmler, 22.05.2023
def register_calibrate_button_callback():
    if _config.get_value('general', 'general', 'button_sensor_calib_enabled'):
        global button_calib
        calib_pin = _config.get_value('general', 'general', 'button_sensor_calib_pin')
        button_calib = machine.Pin(calib_pin, mode=machine.Pin.IN, pull=machine.Pin.PULL_UP)
        print("Calibration Pin {0} set.".format(calib_pin))
        button_calib.callback(machine.Pin.IRQ_FALLING,
                        handler=start_ds18x20_calib)
        print("Callback registered...")

# start main measurement cycle
def start_measurement():
    register_ap_button_callback()
    register_calibrate_button_callback()
    global cycle, loop_run, crcerrcnt

    perf = machine.Timer.Chrono()
    #pycom.heartbeat(False)
    #pycom.rgbled(0x007f00)

    # reconfigure watchdog timeout
    wdt.init(timeout=3*measurement_interval*1000)

    until_wifi_reconnect = _config.get_value('general', 'general', 'until_wifi_reconnect')

    #log("Memory dump on startup:")
    #micropython.mem_info(True)

    while loop_run:
        cycle = cycle + 1
        text = str(cycle) + ". Measurement"
        log(text)
        # start time measuring
        perf.start()
        rgb_led(0x003000)
        # Measure all enabled sensors
        data = {}

        #read RSSI
        try:
            #wlan = network.WLAN(mode=network.WLAN.STA)
            data['rssi']= _wlan.joined_ap_info().rssi
        except:
            data['rssi']= 0
            pass

        # Start DS1820 conversion
        if ds1820 is not None:
            roms = ds1820.scan()
            if roms:
                ds1820.convert_temp()
                time.sleep_ms(750)
                print('   DS18B20: Measurement started...')
            else:
                print("No DS1820 found. Is it connected properly?")
        ms_conversion_start = perf.read_ms()

        # Read data from BME280
        if bme280 is not None:
            try:
                bme280val = bme280.read_compensated_data()      # read BME280
                bme280tmp = round(bme280val[0],2)            # 2 decimal places
                bme280pre = int(round(bme280val[1]/100,0))
                bme280hum = round(bme280val[2],2)
                print('   BME280: ', bme280tmp, 'C', bme280pre, 'mbar', bme280hum, '%')
                data['t'] = bme280tmp
                data['p'] = bme280pre
                data['h'] = bme280hum
            except:
                log("BME280 not measuring.")
        ms_bme_read = perf.read_ms() - ms_conversion_start

        # Read data from HX711
        if hx711 is not None:
            hx711akt = hx711.get_value(times=1)
            hx711akt = round(hx711akt, 3)       # 3 decimal places
            print('   HX711:  ', hx711akt, 'kg' )
            data['weight_kg'] = hx711akt
        ms_hx_read = perf.read_ms() - ms_bme_read

        # Read data from DS1820
        # if ds1820 is not None and ds1820.roms:
        #     ms_to_conversion = 750 - perf.read_ms()
        #     if ms_to_conversion > 0:
        #         time.sleep_ms(int(ms_to_conversion))
        #     for rom in ds1820.roms:
        #         try:
        #             ds_measurement = ds1820.read_temp_async(rom=rom)
        #             ds_name = binascii.hexlify(rom).decode('utf-8')
        #             if ds_name in _ds_positions:
        #                 data[_ds_positions[ds_name]] = ds_measurement
        #         except:
        #             log("Did not find rom.")
        # ms_ds_read = perf.read_ms() - ms_hx_read
        if ds1820 is not None:
            print('   DS18B20:', end=' ')
            ds_data = ds1820.read_all(_ds_positions)
            if len(ds_data) < len(_config.get_value('sensors', 'ds1820', 'positions')):
                print("Can not write ds1820 data on SD-Card. Caused by not declared ds1820s positions.")
            data.update(ds_data)
            print(' ')
        ms_ds_read = perf.read_ms() - ms_hx_read

        # Determine and display the time
        write_time = time.time()
        write_time = write_time + 3600                          # UTC + 1 hour
        datetime_list = time.localtime(write_time)
        datetime_string = "{:4d}-{:02d}-{:02d} {:02d}:{:02d}:{:02d}".format(*datetime_list[0:6])
        time_string = "{:02d}:{:02d}:{:02d}".format(*datetime_list[3:6])
        print('   Time: ', end=' ')
        print(time_string, end=' ')

        if oled:
            try:
                _oled.fill(0)                                         # all off
                _oled.text(str(cycle),              0,  0)
                _oled.text(time_string,            64,  0)
                _oled.text("Waage           "   ,   0,  9)
                if 'weight_kg' in data:
                    _oled.text(str(data['weight_kg']),  64,  9)
                    _oled.text("kg",              110,  9)
                _oled.text("BME280          "   ,   0, 18)
                if 't' in data:
                    _oled.text(str(data['t'])        ,   0, 27)
                if 'p' in data:
                    _oled.text(str(data['p'])        ,  40, 27)
                if 'h' in data:
                    _oled.text(str(data['h'])        ,  95, 27)
                _oled.text("DS18B20         "   ,   0, 36)
                if 't_i_1' in data:
#                   _oled.text(str(round(data['t_i_1'],1)),   0, 45)
                    _oled.text(str(data['t_i_1'])    ,   0, 45)
                if 't_i_2' in data:
                    _oled.text(str(data['t_i_2'])    ,  50, 45)
                if 't_i_3' in data:
                    _oled.text(str(data['t_i_3'])    ,  95, 45)
                if 't_i_4' in data:
                    _oled.text(str(data['t_i_4'])    ,   0, 54)
                if 't_i_5' in data:
                    _oled.text(str(data['t_i_5'])    ,  50, 54)
                if 't_o' in data:
                    _oled.text(str(data['t_o'])      ,  95, 54)
                _oled.show()                                         # show
            except:
                print('OLED defect',end=' ')

        print('   WLAN:   ', end = ' ')
        # Log measured values, if possible
        if ( _config.get_value('networking', 'wlan', 'enabled')
                and _wlan.mode() == network.WLAN.STA
                and _wlan.isconnected()
                and _beep is not None):
            _beep.add(data)
        log(data)
        """ Data on SD-Card """
        # print('   Data on SD-Card')
        if _csv is not None:
            # _csv.add_dict(data)
            _csv.add_data_didi(data, _config.get_value('general', 'general', 'plt'), cycle)
        ms_log_data = perf.read_ms() - ms_ds_read

        # Trying to reconnect to wifi if possible:

        if ( _config.get_value('networking', 'wlan', 'enabled')
                and _beep is not None
                and ((not _wlan.mode() == network.WLAN.STA) or
                (not _wlan.isconnected()))
                ):
            log("wlan is enabled but not connected.")
            until_wifi_reconnect -= 1
            log("trying to reconnect in {} intervals".format(until_wifi_reconnect))
            if until_wifi_reconnect <= 0:
                log('wlan not connected try to reconnect')
                wdt.init(timeout=1*60*1000)
                _wm.enable_client()
                until_wifi_reconnect = _config.get_value('general', 'general', 'until_wifi_reconnect')
                wdt.init(timeout=3*measurement_interval*1000)
        else:
            until_wifi_reconnect = _config.get_value('general', 'general', 'until_wifi_reconnect')


        # Collect garbage
        gc.collect()
        micropython.mem_info()
        ms_gc = perf.read_ms() - ms_log_data

        perf.stop()
        time_elapsed = perf.read_ms()
        time_until_measurement = measurement_interval * 1000 - time_elapsed
        perf.reset()
        # cycle += 1
        # log("#{:d}, Seconds elapsed: {:.3f}s,"
        #     "time until next measurement: {:.3f}s".format(cycle,
        #                                                   time_elapsed/1000,
        #                                                   time_until_measurement/1000))
        # log("DS1820: {:.0f}ms + {:.0f}ms, BME280: {:.0f}ms, HX711: {:.0f}ms "
        #     "Log: {:.0f}ms, GC: {:.0f}ms".format(ms_conversion_start,
        #                                      ms_ds_read,
        #                                      ms_bme_read,
        #                                      ms_hx_read,
        #                                      ms_log_data,
        #                                      ms_gc))

        wdt.feed()

        if time_until_measurement > 0:
            rgb_led(0x080800)
            time.sleep_ms(int(time_until_measurement))


def ap_already_enabled(pin=None):
    global button_ap
    if button_ap() == 0:
        print("Already trying to enable AP.")

# enable ap
def enable_ap(pin=None):
    global _wm, loop_run, _wlan, wdt, button_ap
    # if in button mode, make sure we don't enter this function again
    if _config.get_value('general', 'general', 'button_ap_enabled'):
        button_ap.callback(Pin.IRQ_FALLING, handler=ap_already_enabled)
        print("Called. Pin {}.".format(pin))
    wdt.init(timeout=10*60*1000)
    if not _wlan.mode() == network.WLAN.AP:
        loop_run = False
        _wm.enable_ap()
    if not webserver.mws.IsStarted():
        webserver.mws.Start(threaded=True)
        print("Webserver started!")

# run calibration - M. Rümmler 18.06.2023
def start_ds18x20_calib(pin=None):
    print("Entered calibration callback!")
    ds1820.activate_calibration()
    

###### run this #######

# Initial SSID scan
no_ssids = _wm.scan()
log("Start -> {:d} SSIDS found".format(no_ssids))

# init time
try:
    rtc = machine.RTC()
    rtc.init(time.gmtime(_config.get_value('general', 'general', 'initial_time')))
except:
    log("Time init failed")
    rtc.init(time.gmtime(1556805688))

log("Start -> AP SSID: {}".format(_config.get_value('networking', 'accesspoint', 'ssid')))
log("Start -> Cause of restart: {}".format(reset_causes[machine.reset_cause()]))

log("Start -> switching to ap mode is now possible")
rgb_led(0x001000)


log("Start -> Starting measurement setup...")
wdt.feed()
try:
    if _config.get_value('networking', 'wlan', 'enabled'):
        log("WLan is enabled, trying to connect.")
        _wm.enable_client()
        _beep = logger.beep

        # add to time server
        if _wlan.mode() == network.WLAN.STA and _wlan.isconnected():
            try:
                rtc.ntp_sync("pool.ntp.org")
            except:
                pass
            if (reset_causes[machine.reset_cause()]=='PWRON'
                        and not _config.get_value('general', 'general', 'button_ap_enabled')):
                    enable_ap()
                    wdt.init(timeout=10*60*1000)
                    log("starting Accesspoint after PowerOn for 10 min")
            else:
                start_measurement()
        else:
            log("No network connection.")
            if ((_config.get_value('networking', 'accesspoint', 'enabled')
                    or _csv is None)
                     and not _config.get_value('general', 'general', 'button_ap_enabled')
                    and reset_causes[machine.reset_cause()]=='PWRON'):
                enable_ap()
                wdt.init(timeout=5*60*1000)
            else:
                start_measurement()
    else:
        log("Measuring without network connection.")
        _wlan.deinit()
        start_measurement()

except:
    log("Exception am Ende des Programms")
    log("Error, dumping memory")
    log(sys.exc_info())
    micropython.mem_info(True)
    #machine.reset()
