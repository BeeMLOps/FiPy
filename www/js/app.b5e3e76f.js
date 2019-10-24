(function(e){function n(n){for(var i,s,r=n[0],l=n[1],c=n[2],f=0,_=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&_.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(n);while(_.length)_.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],i=!0,r=1;r<t.length;r++){var l=t[r];0!==a[l]&&(i=!1)}i&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var i={},a={app:0},o=[];function s(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=i,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(t,i,function(n){return e[n]}.bind(null,i));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var c=0;c<r.length;c++)n(r[c]);var u=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var i=t("64a9"),a=t.n(i);a.a},"0403":function(e,n,t){},"16f0":function(e,n,t){},"3c61":function(e,n,t){"use strict";var i=t("4d17"),a=t.n(i);a.a},"4b3e":function(e,n,t){},"4d17":function(e,n,t){},"566e":function(e,n,t){"use strict";var i=t("0403"),a=t.n(i);a.a},5677:function(e,n,t){"use strict";var i=t("4b3e"),a=t.n(i);a.a},"568e":function(e,n,t){"use strict";var i=t("e796"),a=t.n(i);a.a},"56d7":function(e,n,t){"use strict";t.r(n);var i=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),t("router-view")],1)},o=[],s=(t("034f"),t("2877")),r={},l=Object(s["a"])(r,a,o,!1,null,null,null),c=l.exports,u=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("h1",[e._v("Welcome!")]),t("h3",[t("router-link",{attrs:{to:"/config/general"}},[e._v("\n            General settings\n        ")])],1),t("h3",[e._v("Networking")]),t("ul",[t("li",[t("router-link",{attrs:{to:"/networking/ap"}},[e._v("\n                Access Point\n            ")])],1),t("li",[t("router-link",{attrs:{to:"/networking/wlan"}},[e._v("\n                WLan\n            ")])],1)]),t("h3",[e._v("Sensors")]),t("ul",[t("li",[t("router-link",{attrs:{to:"/sensors/test"}},[e._v("\n                Test Sensors\n            ")])],1),t("li",[t("router-link",{attrs:{to:"/sensors/ds1820"}},[e._v("\n                Temperature (DS1820)\n            ")])],1),t("li",[t("router-link",{attrs:{to:"/sensors/hx711"}},[e._v("\n                Scale (HX711)\n            ")])],1),t("li",[t("router-link",{attrs:{to:"/sensors/bme280"}},[e._v("\n                Humidity (BME280)\n            ")])],1)]),t("h3",[e._v("Telemetry")]),t("ul",[t("li",[t("router-link",{attrs:{to:"/telemetry/beep"}},[e._v("\n                BEEP\n            ")])],1)]),t("h3",[e._v("System")]),t("ul",[t("li",[t("router-link",{attrs:{to:"/restart"}},[e._v("\n                Restart\n            ")])],1),t("li",[t("router-link",{attrs:{to:"/log"}},[e._v("\n                Log\n            ")])],1)])])},_=[],d=(t("cccb"),{}),p=Object(s["a"])(d,f,_,!1,null,null,null),g=p.exports,m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ConfigForm",{attrs:{config_url:"/api/config/general/general"},model:{value:e.general_config,callback:function(n){e.general_config=n},expression:"general_config"}},[t("p",[t("label",{attrs:{for:"set_time"}},[e._v("Set current time")]),t("button",{staticClass:"form-button",attrs:{name:"set_time"},on:{click:function(n){return e.get_local_time()}}},[e._v("\n                    Set Time\n        ")])]),t("p",[t("label",{attrs:{for:"button_ap_enabled"}},[e._v("Extra Button available:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.general_config.button_ap_enabled,expression:"general_config.button_ap_enabled"}],attrs:{type:"checkbox",name:"button_ap_enabled"},domProps:{checked:Array.isArray(e.general_config.button_ap_enabled)?e._i(e.general_config.button_ap_enabled,null)>-1:e.general_config.button_ap_enabled},on:{change:function(n){var t=e.general_config.button_ap_enabled,i=n.target,a=!!i.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);i.checked?s<0&&e.$set(e.general_config,"button_ap_enabled",t.concat([o])):s>-1&&e.$set(e.general_config,"button_ap_enabled",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.general_config,"button_ap_enabled",a)}}})]),e.general_config.button_ap_enabled?t("p",[t("label",{attrs:{for:"pin_dout"}},[e._v("Data Pin (DOUT/DT):")]),t("ConfigPinSelect",{attrs:{name:"pin_dout"},model:{value:e.general_config.button_ap_pin,callback:function(n){e.$set(e.general_config,"button_ap_pin",n)},expression:"general_config.button_ap_pin"}})],1):e._e()])},v=[],h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex-form",attrs:{id:"config-form"}},[e._t("default"),e.buttons_visible?t("p",{staticClass:"submit"},[t("button",{on:{click:function(n){return e.save_config()}}},[e._v(e._s(e.save_button_text))]),t("button",{on:{click:function(n){return e.load_config()}}},[e._v("Reset")])]):e._e()],2)},b=[],w=t("bc3a"),y=t.n(w),x={name:"ConfigForm",model:{prop:"config",event:"change"},props:{buttons_visible:{default:!0,type:Boolean},config:Object,config_url:String},data:function(){return{save_button_text:""}},methods:{load_config:function(){var e=this;y.a.get(["http://hiverize.wifi",this.config_url].join("")).then((function(n){e.$emit("change",n.data),e.save_button_text="Save configuration"})).catch((function(e){console.error(e)}))},save_config:function(){var e=this;this.save_button_text="saving...",y.a.post(["http://hiverize.wifi",this.config_url].join(""),this.config).then((function(n){200==n.status&&(e.save_button_text="saved")})).catch((function(e){console.error(e)}))}},created:function(){this.load_config()},watch:{config:{handler:function(){this.save_button_text="Save configuration"},deep:!0}}},k=x,$=(t("566e"),Object(s["a"])(k,h,b,!1,null,null,null)),P=$.exports,S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("select",{domProps:{value:e.value},on:{input:function(n){return e.$emit("input",n.target.value)}}},e._l(e.allowed_pins,(function(n){return t("option",{key:n,domProps:{value:n}},[e._v("\n        "+e._s(n)+"\n    ")])})),0)},C=[],N={name:"ConfigPinSelect",props:{value:String},data:function(){return{allowed_pins:["P2","P3","P9","P10","P11","P12","P21","P22"]}}},A=N,j=Object(s["a"])(A,S,C,!1,null,null,null),O=j.exports,E={name:"GeneralConfig",data:function(){return{general_config:{initial_time:0}}},components:{ConfigForm:P,ConfigPinSelect:O},methods:{get_local_time:function(){this.$set(this.general_config,"initial_time",(new Date).getTime())}}},F=E,D=Object(s["a"])(F,m,v,!1,null,null,null),T=D.exports,W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"ds1820"},[t("h1",[e._v("Configure DS1820")]),t("ConfigForm",{attrs:{config_url:"/api/config/sensors/ds1820",buttons_visible:"false"},model:{value:e.ds1820_config,callback:function(n){e.ds1820_config=n},expression:"ds1820_config"}},[t("p",[t("label",{attrs:{for:"enabled"}},[e._v("Enabled:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ds1820_config.enabled,expression:"ds1820_config.enabled"}],attrs:{type:"checkbox",name:"enabled"},domProps:{checked:Array.isArray(e.ds1820_config.enabled)?e._i(e.ds1820_config.enabled,null)>-1:e.ds1820_config.enabled},on:{change:function(n){var t=e.ds1820_config.enabled,i=n.target,a=!!i.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);i.checked?s<0&&e.$set(e.ds1820_config,"enabled",t.concat([o])):s>-1&&e.$set(e.ds1820_config,"enabled",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.ds1820_config,"enabled",a)}}})]),t("p",[t("label",{attrs:{for:"pin"}},[e._v("Select Pin")]),t("ConfigPinSelect",{model:{value:e.ds1820_config.pin,callback:function(n){e.$set(e.ds1820_config,"pin",n)},expression:"ds1820_config.pin"}})],1),t("div",{staticClass:"description"},[e._v("\n          Please assign each temperature sensor to a position."),t("br"),e._v("\n          Below you see two sets of circles. The red/green circles represent the positions of your sensors, the grey circles below are the connected DS1820."),t("br"),e._v("\n          Follow these steps for each sensor:\n          "),t("ol",[t("li",[e._v("\n                  Grab the metal part of a sensor. Select the grey circle with the rising temperature.\n              ")]),t("li",[e._v("\n                  Click on the circle representing the position of the sensor you hold.\n              ")]),t("li",[e._v("\n                  Now the circle should be colored green and show the temperature.\n              ")])]),e._v("\n          Tip: By clicking a circle with an assigned sensor the assignment can be undone.\n      ")]),t("SensorsDS1820Positions",{attrs:{ds1820_positions:e.ds1820_config.positions,temperatures:e.temperatures_by_position},on:{assign:e.assign_position}}),t("keep-alive",[e.unassigned_ds1820.length>0?t("SensorsDS1820Available",{attrs:{unassigned_ds1820:e.unassigned_ds1820,temperatures:e.temperatures},model:{value:e.selected_ds1820,callback:function(n){e.selected_ds1820=n},expression:"selected_ds1820"}}):e._e()],1)],1)],1)},I=[],B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("fieldset",{staticClass:"ds1820-positions"},[t("legend",[e._v("Unassigned sensors:")]),e._l(e.unassigned_ds1820,(function(n){return t("div",{key:n},[t("button",{key:n,staticClass:"round",class:[e.selected===n?"selected":"unselected"],attrs:{name:n},on:{click:function(t){return e.$emit("change",n)}}},[e._v("\n                "+e._s(e._f("toFixed")(e.temperatures[n],1)))])])}))],2)},L=[],M={model:{prop:"selected",event:"change"},props:{selected:String,unassigned_ds1820:Array,temperatures:Object},methods:{max_unassigned_temp:function(){var e=this,n=2;if(this.unassigned_ds1820.length>1){var t=this.unassigned_ds1820.sort((function(n,t){return e.temperatures[t]-e.temperatures[n]})),i=this.temperatures[t[0]]-this.temperatures[t[1]];if(i>=n)return t[0]}}},watch:{unassigned_ds1820:{handler:function(){console.log(this.unassigned_ds1820.length),this.$emit("change",this.unassigned_ds1820[0])}}}},z=M,H=(t("3c61"),Object(s["a"])(z,B,L,!1,null,null,null)),R=H.exports,U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("fieldset",{staticClass:"ds1820-positions"},[t("legend",[e._v("Positions:")]),e._l(e.allowed_positions,(function(n,i){return t("div",{key:n},[t("button",{staticClass:"round",class:[e.ds1820_positions[n]?"assigned":"unassigned"],attrs:{name:n},on:{click:function(t){return e.$emit("assign",n)}}},[e._v("\n                "+e._s(e.get_label(e.temperatures[n],i))+"\n        ")])])}))],2)},G=[],K={props:{ds1820_positions:Object,temperatures:Object},methods:{get_label:function(e,n){var t=!Number.isNaN(e)&&Number.isFinite(e)?Number.parseFloat(e).toFixed(1):"",i="";return i=5===n?"out":n+1,t||i}},data:function(){return{allowed_positions:["t_i_1","t_i_2","t_i_3","t_i_4","t_i_5","t_o"]}}},q=K,J=(t("5677"),Object(s["a"])(q,U,G,!1,null,null,null)),X=J.exports,Y={name:"ds1820",data:function(){return{selected_ds1820:"",temperatures:{},ds1820_config:{enabled:!0,pin:"P1",positions:{}}}},computed:{unassigned_ds1820:function(){var e=this;return Object.keys(this.temperatures).filter((function(n){return!Object.values(e.ds1820_config.positions).includes(n)}))},assigned_ds1820:function(){var e=this;return Object.keys(this.temperatures).filter((function(n){return Object.values(e.ds1820_config.positions).includes(n)}))},temperatures_by_position:function(){var e=this,n=this.ds1820_config.positions;return Object.keys(n).filter((function(e){return""!==n[e]})).reduce((function(t,i){return t[i]=e.temperatures[n[i]],t}),{})}},methods:{load_temperatures:function(){var e=this;y.a.get(["http://hiverize.wifi","/api/sensors/ds1820"].join("")).then((function(n){Object.keys(n.data).forEach((function(t){e.$set(e.temperatures,t,n.data[t])}))})).catch((function(e){console.error(e)}))},assign_position:function(e){""!==this.ds1820_config.positions[e]?this.$set(this.ds1820_config.positions,e,""):this.selected_ds1820&&(this.$set(this.ds1820_config.positions,e,this.selected_ds1820),this.selected_ds1820="")}},created:function(){var e=this;this.load_temperatures(),setInterval((function(){e.load_temperatures()}),2e3)},components:{ConfigForm:P,ConfigPinSelect:O,SensorsDS1820Available:R,SensorsDS1820Positions:X}},Q=Y,V=(t("f96e"),Object(s["a"])(Q,W,I,!1,null,null,null)),Z=V.exports,ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ConfigForm",{attrs:{config_url:"/api/config/sensors/hx711"},model:{value:e.hx711_config,callback:function(n){e.hx711_config=n},expression:"hx711_config"}},[t("p",[t("label",{attrs:{for:"enabled"}},[e._v("Enabled:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.hx711_config.enabled,expression:"hx711_config.enabled"}],attrs:{type:"checkbox",name:"enabled"},domProps:{checked:Array.isArray(e.hx711_config.enabled)?e._i(e.hx711_config.enabled,null)>-1:e.hx711_config.enabled},on:{change:function(n){var t=e.hx711_config.enabled,i=n.target,a=!!i.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);i.checked?s<0&&e.$set(e.hx711_config,"enabled",t.concat([o])):s>-1&&e.$set(e.hx711_config,"enabled",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.hx711_config,"enabled",a)}}})]),t("p",[t("label",{attrs:{for:"pin_dout"}},[e._v("Data Pin (DOUT/DT):")]),t("ConfigPinSelect",{attrs:{name:"pin_dout"},model:{value:e.hx711_config.pin_dout,callback:function(n){e.$set(e.hx711_config,"pin_dout",n)},expression:"hx711_config.pin_dout"}})],1),t("p",[t("label",{attrs:{for:"pin_dout"}},[e._v("Clock Pin (CLK/SCK):")]),t("ConfigPinSelect",{attrs:{name:"pin_dout"},model:{value:e.hx711_config.pin_pdsck,callback:function(n){e.$set(e.hx711_config,"pin_pdsck",n)},expression:"hx711_config.pin_pdsck"}})],1),t("p",[e.is_calibrated?e._e():t("b",[e._v("Your scale is not calibrated!")]),t("button",{on:{click:function(n){return e.$router.push("/sensors/hx711/calibrate")}}},[e._v("\n            Start calibration\n        ")])])])},ne=[],te={name:"SensorsHX711",data:function(){return{hx711_config:{enabled:!0,pin_pdsck:"",pin_dout:"",tare_offset:0,calibration_factor:0}}},computed:{is_calibrated:function(){return this.hx711_config.hasOwnProperty("tare_offset")&&0!==this.hx711_config["tare_offset"]&&this.hx711_config.hasOwnProperty("calibration_factor")&&1!==this.hx711_config["calibration_factor"]}},components:{ConfigForm:P,ConfigPinSelect:O}},ie=te,ae=Object(s["a"])(ie,ee,ne,!1,null,null,null),oe=ae.exports,se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Scale")]),t("ConfigForm",{ref:"configform",attrs:{config_url:"/api/config/sensors/hx711",buttons_visible:!1},model:{value:e.hx711_config,callback:function(n){e.hx711_config=n},expression:"hx711_config"}},[0===e.step?t("div",{staticClass:"flex-form"},[t("p",[e._v('\n                We propose that you first put 1 kg on your scale, and then entirele remove all the weight in the next step.\n                If you want, you can also specify some other weight. When the weight is on your scale, click on "Continue".\n            ')]),t("p",[t("label",{attrs:{for:"weight"}},[e._v("Weight (kg)")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.cal_weight,expression:"cal_weight",modifiers:{number:!0}}],attrs:{type:"number",name:"cal_weight",min:"0",step:"0.1"},domProps:{value:e.cal_weight},on:{input:function(n){n.target.composing||(e.cal_weight=e._n(n.target.value))},blur:function(n){return e.$forceUpdate()}}})]),t("p",{staticClass:"submit"},[t("button",{on:{click:function(n){return e.load_weight(e.do_step_1)}}},[e._v("Continue")]),t("button",{on:{click:function(n){return e.$router.go(-1)}}},[e._v("Back")])])]):e._e(),1===e.step?t("div",{staticClass:"flex-form"},[t("p",[e._v('\n                We propose that you now remove all the weight from your scale.\n                If you want, you can also specify some remaining weight. Once you removed the weight, click on "Continue".\n            ')]),t("p",[t("label",{attrs:{for:"weight"}},[e._v("Weight (kg)")]),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.cal_no_weight,expression:"cal_no_weight",modifiers:{number:!0}}],attrs:{type:"number",name:"cal_no_weight",min:"0",step:"0.1"},domProps:{value:e.cal_no_weight},on:{input:function(n){n.target.composing||(e.cal_no_weight=e._n(n.target.value))},blur:function(n){return e.$forceUpdate()}}})]),t("p",{staticClass:"submit"},[t("button",{on:{click:function(n){return e.load_weight(e.do_step_2)}}},[e._v("Continue")]),t("button",{on:{click:function(n){e.step=0}}},[e._v("Back")])])]):e._e()])],1)},re=[],le={name:"hx711",data:function(){return{hx711_config:{enabled:!0,pin_dout:"",pin_pdsck:"",tare_offset:0,calibration_factor:1},cal_weight:1,cal_no_weight:0,step:0,measured_weight:0}},methods:{load_weight:function(e){y.a.get(["http://hiverize.wifi","/api/sensors/hx711"].join("")).then((function(n){e(n.data["weight"])})).catch((function(e){console.error(e)}))},do_step_1:function(e){Number.parseFloat(e)?(this.step=1,this.measured_weight=Number.parseFloat(e)):this.load_weight(this.do_step_1)},do_step_2:function(e){if(Number.parseFloat(e)){var n=(Number.parseFloat(this.measured_weight)-Number.parseFloat(e))/(Number.parseFloat(this.cal_weight)-Number.parseFloat(this.cal_no_weight));this.$set(this.hx711_config,"calibration_factor",n);var t=Number.parseFloat(this.measured_weight)-this.hx711_config.calibration_factor*Number.parseFloat(this.cal_weight);this.$set(this.hx711_config,"tare_offset",t),this.step=0,this.$refs.configform.save_config(),this.$router.push("/sensors/hx711")}else this.load_weight(this.do_step_2)}},components:{ConfigForm:P}},ce=le,ue=(t("64cd"),Object(s["a"])(ce,se,re,!1,null,null,null)),fe=ue.exports,_e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ConfigForm",{attrs:{config_url:"/api/config/sensors/bme280"},model:{value:e.bme280_config,callback:function(n){e.bme280_config=n},expression:"bme280_config"}},[t("p",[t("label",{attrs:{for:"enabled"}},[e._v("Enabled:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.bme280_config.enabled,expression:"bme280_config.enabled"}],attrs:{type:"checkbox",name:"enabled"},domProps:{checked:Array.isArray(e.bme280_config.enabled)?e._i(e.bme280_config.enabled,null)>-1:e.bme280_config.enabled},on:{change:function(n){var t=e.bme280_config.enabled,i=n.target,a=!!i.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);i.checked?s<0&&e.$set(e.bme280_config,"enabled",t.concat([o])):s>-1&&e.$set(e.bme280_config,"enabled",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.bme280_config,"enabled",a)}}})]),t("p",[t("label",{attrs:{for:"pin_dout"}},[e._v("Pin SDA:")]),t("ConfigPinSelect",{attrs:{name:"pin_dout"},model:{value:e.bme280_config.pin_sda,callback:function(n){e.$set(e.bme280_config,"pin_sda",n)},expression:"bme280_config.pin_sda"}})],1),t("p",[t("label",{attrs:{for:"pin_dout"}},[e._v("Pin SCL:")]),t("ConfigPinSelect",{attrs:{name:"pin_dout"},model:{value:e.bme280_config.pin_scl,callback:function(n){e.$set(e.bme280_config,"pin_scl",n)},expression:"bme280_config.pin_scl"}})],1)])},de=[],pe={name:"SensorsBME280",data:function(){return{bme280_config:{enabled:!0,pin_sda:"",pin_scl:""}}},components:{ConfigForm:P,ConfigPinSelect:O}},ge=pe,me=Object(s["a"])(ge,_e,de,!1,null,null,null),ve=me.exports,he=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Test sensors")]),e._v("\n        Temperatures (DS18B20)\n        "),t("ul",{attrs:{id:"temperatures"}},e._l(e.temperatures,(function(n,i,a){return t("li",[e._v("\n    "+e._s(a+1)+" - "+e._s(n)+"\n  ")])})),0),e._v("\nHumidity-Related Measurements\n        "),t("ul",{attrs:{id:"humidities"}},e._l(e.humidities,(function(n,i,a){return t("li",[e._v("\n     "+e._s(a+1)+" - "+e._s(n)+" - "+e._s(i)+" \n  ")])})),0),e._v("\nWeight\n        "),t("ul",{attrs:{id:"Weight"}},e._l(e.weight,(function(n){return t("li",[e._v("\n      "+e._s(n)+" \n  ")])})),0)])},be=[],we={name:"ds1820",data:function(){return{selected_ds1820:"",temperatures:{},humidities:{},weight:{},ds1820_config:{enabled:!0,pin:"P1",positions:{}}}},computed:{unassigned_ds1820:function(){var e=this;return Object.keys(this.temperatures).filter((function(n){return!Object.values(e.ds1820_config.positions).includes(n)}))},assigned_ds1820:function(){var e=this;return Object.keys(this.temperatures).filter((function(n){return Object.values(e.ds1820_config.positions).includes(n)}))},temperatures_by_position:function(){var e=this,n=this.ds1820_config.positions;return Object.keys(n).filter((function(e){return""!==n[e]})).reduce((function(t,i){return t[i]=e.temperatures[n[i]],t}),{})}},methods:{load_temperatures:function(){var e=this;y.a.get(["http://hiverize.wifi","/api/sensors/ds1820"].join("")).then((function(n){Object.keys(n.data).forEach((function(t){e.$set(e.temperatures,t,n.data[t])}))})).catch((function(e){console.error(e)}))},load_humidity:function(){var e=this;y.a.get(["http://hiverize.wifi","/api/sensors/bme280"].join("")).then((function(n){Object.keys(n.data).forEach((function(t){e.$set(e.humidities,t,n.data[t])}))})).catch((function(e){console.error(e)}))},load_weight:function(){var e=this;y.a.get(["http://hiverize.wifi","/api/sensors/hx711cal"].join("")).then((function(n){Object.keys(n.data).forEach((function(t){e.$set(e.weight,t,n.data[t])}))})).catch((function(e){console.error(e)}))},assign_position:function(e){""!==this.ds1820_config.positions[e]?this.$set(this.ds1820_config.positions,e,""):this.selected_ds1820&&(this.$set(this.ds1820_config.positions,e,this.selected_ds1820),this.selected_ds1820="")}},created:function(){var e=this;this.load_temperatures(),this.load_humidity(),this.load_weight(),setInterval((function(){e.load_temperatures(),e.load_humidity(),e.load_weight()}),2e3)},components:{ConfigForm:P,ConfigPinSelect:O,SensorsDS1820Available:R,SensorsDS1820Positions:X}},ye=we,xe=Object(s["a"])(ye,he,be,!1,null,null,null),ke=xe.exports,$e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ConfigForm",{attrs:{config_url:"/api/config/telemetry/beep"},model:{value:e.beep_config,callback:function(n){e.beep_config=n},expression:"beep_config"}},[t("p",[t("label",{attrs:{for:"enabled"}},[e._v("Enabled:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.beep_config.enabled,expression:"beep_config.enabled"}],attrs:{type:"checkbox",name:"enabled"},domProps:{checked:Array.isArray(e.beep_config.enabled)?e._i(e.beep_config.enabled,null)>-1:e.beep_config.enabled},on:{change:function(n){var t=e.beep_config.enabled,i=n.target,a=!!i.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);i.checked?s<0&&e.$set(e.beep_config,"enabled",t.concat([o])):s>-1&&e.$set(e.beep_config,"enabled",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.beep_config,"enabled",a)}}})]),t("p",[t("label",{attrs:{for:"enabled"}},[e._v("Server:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.beep_config.server,expression:"beep_config.server"}],attrs:{type:"text",name:"server"},domProps:{value:e.beep_config.server},on:{input:function(n){n.target.composing||e.$set(e.beep_config,"server",n.target.value)}}})]),t("p",[t("label",{attrs:{for:"enabled"}},[e._v("Sensor Key:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.beep_config.sensor_key,expression:"beep_config.sensor_key"}],attrs:{type:"text",name:"sensor_key"},domProps:{value:e.beep_config.sensor_key},on:{input:function(n){n.target.composing||e.$set(e.beep_config,"sensor_key",n.target.value)}}})])])},Pe=[],Se={name:"TelemetryBEEP",data:function(){return{beep_config:{enabled:!0,sensor_key:"",server:""}}},methods:{generate_key:function(){for(var e="",n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",t=0;t<16;t++)e+=n.charAt(Math.floor(Math.random()*n.length));this.$set(this.beep_config,"sensor_key",e)}},components:{ConfigForm:P}},Ce=Se,Ne=Object(s["a"])(Ce,$e,Pe,!1,null,null,null),Ae=Ne.exports,je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("WLan configuration")]),t("ConfigForm",{attrs:{config_url:"/api/config/networking/wlan"},model:{value:e.wlan_config,callback:function(n){e.wlan_config=n},expression:"wlan_config"}},[t("p",[t("label",{attrs:{for:"enabled"}},[e._v("Enabled:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.enabled,expression:"wlan_config.enabled"}],attrs:{type:"checkbox",name:"enabled"},domProps:{checked:Array.isArray(e.wlan_config.enabled)?e._i(e.wlan_config.enabled,null)>-1:e.wlan_config.enabled},on:{change:function(n){var t=e.wlan_config.enabled,i=n.target,a=!!i.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);i.checked?s<0&&e.$set(e.wlan_config,"enabled",t.concat([o])):s>-1&&e.$set(e.wlan_config,"enabled",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.wlan_config,"enabled",a)}}})]),t("p",[t("label",{attrs:{for:"antenna_external"}},[e._v("Use external antenna:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.antenna_external,expression:"wlan_config.antenna_external"}],attrs:{type:"checkbox",name:"antenna_external"},domProps:{checked:Array.isArray(e.wlan_config.antenna_external)?e._i(e.wlan_config.antenna_external,null)>-1:e.wlan_config.antenna_external},on:{change:function(n){var t=e.wlan_config.antenna_external,i=n.target,a=!!i.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);i.checked?s<0&&e.$set(e.wlan_config,"antenna_external",t.concat([o])):s>-1&&e.$set(e.wlan_config,"antenna_external",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.wlan_config,"antenna_external",a)}}})]),t("p",[t("label",{attrs:{for:"pin_dout"}},[e._v("Antenna Pin:")]),t("ConfigPinSelect",{attrs:{name:"pin_dout"},model:{value:e.wlan_config.antenna_pin,callback:function(n){e.$set(e.wlan_config,"antenna_pin",n)},expression:"wlan_config.antenna_pin"}})],1),e.ssid_visible?t("p",[t("label",{attrs:{for:"ssid"}},[e._v("SSID:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.ssid,expression:"wlan_config.ssid"}],attrs:{name:"ssid"},on:{change:[function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.$set(e.wlan_config,"ssid",n.target.multiple?t:t[0])},function(n){return e.update_encryption()}]}},[t("option",{attrs:{disabled:"",value:""}},[e._v("\n                    Please select an SSID\n                ")]),e._l(e.wlan_config.available,(function(n){return t("option",{key:n.bssid,domProps:{value:n.ssid}},[e._v("\n                    "+e._s(n.ssid)+"\n                ")])}))],2)]):e._e(),e.ssid_visible?t("p",{attrs:{id:"ssid_not_listed"}},[t("label",{attrs:{for:"ssid_visible"}}),t("button",{on:{click:function(n){e.ssid_visible=!1}}},[e._v("My SSID is not listed")])]):t("p",[t("label",{attrs:{for:"ssid"}},[e._v("SSID:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.ssid,expression:"wlan_config.ssid"}],attrs:{type:"text",name:"ssid"},domProps:{value:e.wlan_config.ssid},on:{input:function(n){n.target.composing||e.$set(e.wlan_config,"ssid",n.target.value)}}})]),t("p",[t("label",{attrs:{for:"encryption"}},[e._v("Encryption:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.encryption,expression:"wlan_config.encryption"}],attrs:{name:"encryption"},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.$set(e.wlan_config,"encryption",n.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[e._v("None")]),t("option",{attrs:{value:"1"}},[e._v("WEP")]),t("option",{attrs:{value:"2"}},[e._v("WPA")]),t("option",{attrs:{value:"3"}},[e._v("WPA2")]),t("option",{attrs:{value:"5"}},[e._v("WPA2 ENT")])])]),t("p",[t("label",{attrs:{for:"password"}},[e._v("Password:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.password,expression:"wlan_config.password"}],attrs:{type:"password",name:"password"},domProps:{value:e.wlan_config.password},on:{input:function(n){n.target.composing||e.$set(e.wlan_config,"password",n.target.value)}}})]),t("p",[t("label",{attrs:{for:"ifconfig"}},[e._v("IP Address:")]),t("span",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.ifconfig,expression:"wlan_config.ifconfig"}],attrs:{type:"radio",name:"ifconfig",value:"dhcp"},domProps:{checked:e._q(e.wlan_config.ifconfig,"dhcp")},on:{change:function(n){return e.$set(e.wlan_config,"ifconfig","dhcp")}}}),e._v(" DHCP\n                "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.ifconfig,expression:"wlan_config.ifconfig"}],attrs:{type:"radio",name:"ifconfig",value:"static"},domProps:{checked:e._q(e.wlan_config.ifconfig,"static")},on:{change:function(n){return e.$set(e.wlan_config,"ifconfig","static")}}}),e._v(" Static\n            ")])]),"static"===e.wlan_config.ifconfig?t("div",{attrs:{id:"ipv4_static"}},[t("p",[t("label",{attrs:{for:"ipaddress"}},[e._v("Address:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.ipaddress,expression:"wlan_config.ipaddress"}],attrs:{type:"text",name:"ipaddress"},domProps:{value:e.wlan_config.ipaddress},on:{input:function(n){n.target.composing||e.$set(e.wlan_config,"ipaddress",n.target.value)}}})]),t("p",[t("label",{attrs:{for:"subnet"}},[e._v("Subnet:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.subnet,expression:"wlan_config.subnet"}],attrs:{type:"text",name:"subnet"},domProps:{value:e.wlan_config.subnet},on:{input:function(n){n.target.composing||e.$set(e.wlan_config,"subnet",n.target.value)}}})]),t("p",[t("label",{attrs:{for:"gateway"}},[e._v("Gateway:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.gateway,expression:"wlan_config.gateway"}],attrs:{type:"text",name:"gateway"},domProps:{value:e.wlan_config.gateway},on:{input:function(n){n.target.composing||e.$set(e.wlan_config,"gateway",n.target.value)}}})]),t("p",[t("label",{attrs:{for:"dns"}},[e._v("DNS Server:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wlan_config.dns,expression:"wlan_config.dns"}],attrs:{type:"text",name:"dns"},domProps:{value:e.wlan_config.dns},on:{input:function(n){n.target.composing||e.$set(e.wlan_config,"dns",n.target.value)}}})])]):e._e()])],1)},Oe=[],Ee={name:"NetworkingWLan",data:function(){return{ssid_visible:!0,wlan_config:{antenna_pin:"",available:[],ssid:"",encryption:"",password:"",ifconfig:"dhcp",ipaddress:"",subnet:"",gateway:"",dns:""}}},methods:{update_encryption:function(){var e=this,n=this.wlan_config.available.filter((function(n){return n.ssid===e.wlan_config.ssid}));n.length>0&&this.$set(this.wlan_config,"encryption",n[0].sec)}},components:{ConfigForm:P,ConfigPinSelect:O}},Fe=Ee,De=(t("568e"),Object(s["a"])(Fe,je,Oe,!1,null,null,null)),Te=De.exports,We=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Access point configuration")]),t("ConfigForm",{attrs:{config_url:"/api/config/networking/accesspoint"},model:{value:e.ap_config,callback:function(n){e.ap_config=n},expression:"ap_config"}},[t("p",[t("label",{attrs:{for:"enabled"}},[e._v("Enabled:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ap_config.enabled,expression:"ap_config.enabled"}],attrs:{type:"checkbox",name:"enabled"},domProps:{checked:Array.isArray(e.ap_config.enabled)?e._i(e.ap_config.enabled,null)>-1:e.ap_config.enabled},on:{change:function(n){var t=e.ap_config.enabled,i=n.target,a=!!i.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);i.checked?s<0&&e.$set(e.ap_config,"enabled",t.concat([o])):s>-1&&e.$set(e.ap_config,"enabled",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.ap_config,"enabled",a)}}})]),t("p",[t("label",{attrs:{for:"ssid"}},[e._v("SSID:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ap_config.ssid,expression:"ap_config.ssid"}],attrs:{type:"text",name:"ssid"},domProps:{value:e.ap_config.ssid},on:{input:function(n){n.target.composing||e.$set(e.ap_config,"ssid",n.target.value)}}})]),t("p",[t("label",{attrs:{for:"encryption"}},[e._v("Encryption:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.ap_config.encryption,expression:"ap_config.encryption"}],attrs:{name:"encryption"},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.$set(e.ap_config,"encryption",n.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[e._v("None")]),t("option",{attrs:{value:"1"}},[e._v("WEP")]),t("option",{attrs:{value:"2"}},[e._v("WPA")]),t("option",{attrs:{value:"3"}},[e._v("WPA2")]),t("option",{attrs:{value:"5"}},[e._v("WPA2 ENT")])])]),t("p",[t("label",{attrs:{for:"password"}},[e._v("Password:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ap_config.password,expression:"ap_config.password"}],attrs:{type:"password",name:"password"},domProps:{value:e.ap_config.password},on:{input:function(n){n.target.composing||e.$set(e.ap_config,"password",n.target.value)}}})]),t("p",[t("label",{attrs:{for:"channel"}},[e._v("Channel:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.ap_config.channel,expression:"ap_config.channel"}],attrs:{name:"channel"},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.$set(e.ap_config,"channel",n.target.multiple?t:t[0])}}},e._l(11,(function(n){return t("option",{key:n,domProps:{value:n}},[e._v("\n                    "+e._s(n)+"\n                ")])})),0)])])],1)},Ie=[],Be={name:"NetworkingAccesspoint",data:function(){return{ap_config:{ssid:"",encryption:"",password:"",channel:1}}},components:{ConfigForm:P}},Le=Be,Me=Object(s["a"])(Le,We,Ie,!1,null,null,null),ze=Me.exports,He=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Re=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Restart")]),e._v("\n    The FiPy will now restart. If you've configured a WLan connection the system will try to connect. If everything is fine the LED should be green and you should start seeing data in BEEP."),t("br"),e._v("\n    If the connection fails the LED will be yellow and you can reconnect to this access point."),t("br"),t("b",[e._v("You can close this window now!")])])}],Ue={name:"Restart",created:function(){y.a.get(["http://hiverize.wifi","/restart"].join(""))}},Ge=Ue,Ke=Object(s["a"])(Ge,He,Re,!1,null,null,null),qe=Ke.exports,Je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ConfigForm",{attrs:{config_url:"/api/log",buttons_visible:!1},model:{value:e.log,callback:function(n){e.log=n},expression:"log"}},[t("p",[t("label",{attrs:{for:"reset_cause"}},[e._v("\n            Reset cause:\n        ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.log.reset_cause,expression:"log.reset_cause"}],attrs:{type:"text",name:"reset_cause",readonly:""},domProps:{value:e.log.reset_cause},on:{input:function(n){n.target.composing||e.$set(e.log,"reset_cause",n.target.value)}}})]),t("p",[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.log.logfile,expression:"log.logfile"}],staticClass:"logfile",attrs:{readonly:"",rows:"10"},domProps:{value:e.log.logfile},on:{input:function(n){n.target.composing||e.$set(e.log,"logfile",n.target.value)}}})])])},Xe=[],Ye={name:"SystemLog",data:function(){return{log:{reset_cause:"",logfile:""}}},components:{ConfigForm:P},methods:{get_local_time:function(){this.$set(this.general_config,"initial_time",(new Date).getTime())}}},Qe=Ye,Ve=(t("9017"),Object(s["a"])(Qe,Je,Xe,!1,null,null,null)),Ze=Ve.exports;i["a"].use(u["a"]);var en=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g},{path:"/config/general",name:"general",component:T},{path:"/sensors/ds1820",name:"ds1820",component:Z},{path:"/sensors/test",name:"sensortest",component:ke},{path:"/sensors/hx711/calibrate",name:"hx711calibration",component:fe},{path:"/sensors/hx711",name:"hx711",component:oe},{path:"/sensors/bme280",name:"bme280",component:ve},{path:"/networking/wlan",name:"wlan",component:Te},{path:"/networking/ap",name:"ap",component:ze},{path:"/telemetry/beep",name:"beep",component:Ae},{path:"/restart",name:"restart",component:qe},{path:"/log",name:"log",component:Ze}]});i["a"].filter("toFixed",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return!Number.isNaN(e)&&Number.isFinite(e)?Number.parseFloat(e).toFixed(n):""})),i["a"].filter("ifEmpty",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e||n})),i["a"].config.productionTip=!1,new i["a"]({router:en,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,n,t){},"64cd":function(e,n,t){"use strict";var i=t("e5f1"),a=t.n(i);a.a},"80d4":function(e,n,t){},9017:function(e,n,t){"use strict";var i=t("80d4"),a=t.n(i);a.a},cccb:function(e,n,t){"use strict";var i=t("d563"),a=t.n(i);a.a},d563:function(e,n,t){},e5f1:function(e,n,t){},e796:function(e,n,t){},f96e:function(e,n,t){"use strict";var i=t("16f0"),a=t.n(i);a.a}});