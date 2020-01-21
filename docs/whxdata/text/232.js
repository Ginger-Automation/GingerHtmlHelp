rh._.exports({"0":["Android Testing Setup on Appium Server"],"1":["\n  ","\n  ","These steps will allows Ginger to run tests on an USB connected Android device using Appium.","\n  "," ","\n  "," Pre-requisites","\n          i)    Ginger need to be installed on a Windows operating system machine.","\n  ","    ii)    In server can be installed on:","\n                 Windows OS that supports .NET Framework 4.5.1","\n                         1.    Windows Vista SP2","\n                         2.    Windows 7 SP1","\n                         3.    Windows Server 2008 SP2","\n                         4.    Windows Server R2 SP1","\n                         5.    Windows Server 2012","\n  ","\n         iii)    Ginger Windows machine and Appium server machine must be located on the same network (can ping each other)","\n         iv)    Admin user to the Ginger Windows’s machine and Appium server machine is required for installations","\n       ","\n      ","Ginger- Appium Connection Diagram","\n  ","            ","\n  ","\n      ","Appium Server Installation","\n              All installation steps need to be done on the Appium sever machine using an Admin user.","\n  ","     ","   1.    On Windows Machine","\n                   1.1    Windows: Install Appium Prerequisites for Windows","\n                         1.1.1  Install latest Java JDK:","\n                                  a.    Download the latest Java JDK version from below link (which fits to OS type 32/64 bit):  ","\n                                         http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html","\n                                         ","\n  ","                                     ","\n  ","\n                                  b.    Double click and install it- Make sure Java JDK is saved in a folder that is accessible to all users (e.g. “C:\\Program                                                  Files\\Java\\jdk1.8.0_25”)","\n  "," ","\n  ","                   1.1.2  Install Android SDK:","\n                                 a.    Download the latest Android Studio (SDK is included) from http://developer.android.com/sdk/installing/index.html                                  ","\n  ","                                 ","\n                                 b.    Run it - Make sure Android SDK is saved in a folder that is accessible to all users (e.g.  “C:\\Android\\Android SDK”)","\n  ","\n                         1.1.3    Set the Environment Variables:","\n                                a.    Go to Control Panel-> System and Security-> System->Advanced system settings","\n                                        ","\n  ","\n                                b.    Go to Advanced tab->Environment Variables…","\n                                       ","\n  ","\n                                c.    Add/Edit the below System variables:","\n                                       i.    Variable Name: JAVA_HOME","\n                                             Variable Value: [path to Java SDK] (e.g., “C:\\Program Files\\Java\\jdk1.8.0_25”]","\n                                             ","\n  ","\n                                     ii.    Variable Name: ANDROID_HOME","\n                                            Variable Value: [path to Android SDK] (e.g., “C:\\Android\\Android SDK”]","\n  ","                               iii. Variable Name: Path","\n                                          Variable Value: %PATH%;%JAVA_HOME%\\bin;%ANDROID_HOME%\\tools;%ANDROID_HOME%\\platform-tools;","\n                                          ","Note:"," If Path variable is already exist then just add the above value to the existing value","\n  ","\n         ","         1.2    Windows: Install Appium ","\n                           a.    Open the Appium Web site:","\n                                   http://appium.io/","\n                          b.    Click on Download Appium button                            ","\n  ","                           ","\n  ","                    c.    Double click and install Appium application- install it in a folder which will be accessible to all users","\n  ","                    d.    Launch the application from Start->Appium->Appium","\n                                  ","\n  ","                              ","\n  ","                               ","\n  ","\n          ","      1.3    Windows: Configure and Launch Appium Server","\n                           a.    In case you plan to run Ginger which installed on a different machine (same network):","\n                                 i.    Open windows Run type “CMD” and click enter in the opened window type “Ipconfig”","\n                                ii.    Write the IP value which appears for “IPv4 Address”","\n                                        ","   ","\n  ","\n                              iii.    In Appium, click on “General Settings” button and replace the “127.0.0.1” value with the IP number you got in ","\n  ","                                  the previous step ","\n                                          ","   ","\n  ","                                        ","\n  ","                        iv.    Close the General Settings window","\n                              v.    Click on “Launch the Appium Node Server” (Play icon)  ","\n  ","                                     ","\n  ","                                    ","\n  ","                       vi.    Make sure appium is starting without errors","\n                            vii.    Appium server is UP and ready to get connecting request from Ginger!","\n      ","  ","\n    ","\n    ","\n    ","\n    ","\n      ","\n  ","\n    "," ","\n\n"],"2":["Android Testing Setup on Appium Server"],"id":"232"})