rh._.exports({"0":["Mobile iOS Testing Device Setup"],"1":["\n  ","\n  ","2.1. Setting Device Configurations ","\n  ","    ","  a.    Connect the device to the Mac via USB","\n              b.    When connecting the iOS device to the Mac machine you will be asked (on the device) if to trust the connected Mac- select “Trust”","\n              c.    For iOS 6.0 and up Turn on “Web inspector” on iOS device (settings > safari > advanced)","\n              d.    For iOS 8.0 and up Turn on \"UI Automation\" toggle on iOS device (settings > Developer)","\n            ","\n      ","2.2.    Getting Device Details","\n  ","    ","  a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n              b.    Type and run below command:","\n                    instruments –s devices","\n              c.    You will see list of all known devices, the list contains the Simulators and real devices (which connected to the Mac via USB)- those ","\n  ","are the devices which will be known by Appium and automation will be available for them","\n            d.    For each device there are 3 important details","\n            a.    Device Name","\n            b.    Platform Version","\n            c.    Device ID (UDID)","\n                   ","\n            e.    The device details will be used for the Ginger Agent configuration so automation will run on the relevant device","\n\n"],"2":["Mobile iOS Testing Device Setup"],"id":"243"})