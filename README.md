# BeeMLOps

# Setup

## Prepare Dev Enviroment - Win/Mac 
For VSCode: https://docs.pycom.io/gettingstarted/software/vscode/

![](/images/img6.png)
1. Download VS Code and Pymakr plugin
2. Connect the board with your computer using USB
3. The device should be visible in the Devices tab of the Pymakr plugin. Connect with the device and open the terminal.
4. In order to upload and run the code on the device:
- Create a new project in Pymakr plugin. By default files boot.py and main.py will be created
- In the explorer tab right click on the file or project you want to run or upload to the device, pymakr option should give you the ability to do just that. You can also use sync project to device function.
- The device should now reboot. You can monitor the current state of the device using terminal.

To upload you have to send workspace content into device using pymakr:
![](/images/img1.png)
To test your script, run:
```python
`exec(open('my-program.py').read())`
```

## Try out hiverize
Flash the memory of FyPy using our repository (press sync button on pymakr - as shown before)
Connect to our FyPy's access point:

![](/images/img2.png)

After pressing connect, it should soon greet you with local screen
You should be able to access the webserver from the link http://hiverize.wifi/en/home :

![](/images/img3.png)

# Other

## WLan connection

Click on WLan

![](/images/img4.png)

Now define your local Wi-Fi point that you wish to connect the board with:

![](/images/img5.png)

## Sensor Calibration



# References
https://github.com/bortyr/FiPy/tree/master
https://community.hiveeyes.org/t/installation-der-bee-observer-firmware-unter-windows/2673
https://community.hiveeyes.org/t/vorbereitungen-fur-bob-workshop-in-hannover-im-marz-2023/4745
https://192.168.164.15/beemlops/beemlops/-/wikis/IOT-Hardware/Kits-Comparison
https://docs.pycom.io/gettingstarted/
https://realpython.com/micropython/
