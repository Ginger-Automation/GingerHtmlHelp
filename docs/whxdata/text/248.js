rh._.exports({"0":["Android Testing Device setup"],"1":["\n  ","\n  ","\n  ","1.    Setting Device Configurations","\n  ","        a.    Set the phone to “USB Debug Mode”:","\n                   •    Enter the phone System Settings-> General-> Developer options","\n                   •    Turn on the USB Debugging option","\n                      "," Note:"," in case you can’t find the “Developer options” then go to System Settings-> General-> About phone-> Software ","\n  ","                             information-> Click 7 time on the “Build number” then the Developer options supposed to be added","\n              b.    Connect the phone to the PC using USB","\n                   •    The correct phone driver should be automatically be installed. ","\n                           If it isn’t:","\n                             o    For window: Install PDANet from http://pdanet.co/bin/PdaNetA4150.exe- as part of the installation it will allow ","\n  ","                              you to install a driver which fits to your phone.","\n                                    You can also search for relevant driver online.","\n                             o    For Mac- search online for the relevant driver for your device","\n              c.    If you been asked on the device to approve the PC – then do it","\n  ","\n      "," 2.    Getting Device Details"," ","\n       ","\n                a.    Connect the device to the PC using USB ","\n                b.    Get the Device ID","\n                         o    On Windows:","\n                              i.    First Method:","\n                                   1.    Open CMD","\n                                   2.    Type “adb devices”","\n                                   3.    Get the ID of the device from returned list of connected devices","\n                                               ","\n  ","                        ii.    Second Method:","\n                                   1.    Open the Android SDK monitor tool by doing StartRun “%ANDROID_HOME%\\tools\\monitor.bat”","\n                                   2.    You supposed to see the connected devices in the top left list","\n                                   3.    Part of the name is the device ID","\n  ","                                    ","\n                                               ","\n  ","                   o    For Mac:","\n                              i.    Open Terminal window","\n                              ii.    Type the command below and type enter","\n                                     adb devices","\n                              iii.    List of all connected android device supposed to show with their device ID","\n                                      ","\n                                     ","Note:"," if the list is empty then make sure that the device driver is installed and that it is connected ","\n  ","                                          (also try to reboot your"," Mac machine)","\n\n"],"2":["Android Testing Device setup"],"id":"248"})