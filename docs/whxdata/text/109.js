rh._.exports({"0":["Native/Hybrid App Testing on Real Device Setup"],"1":["\n  ","\n  ","Appium will be able to connect and automate only apps which were signed using a valid iOS Development Distribution Certificate and Provisioning Profile (due to Apple limitations).","\n  ","Prerequisites:","\n          •    Tested app source code (Xcode project)","\n          •    iOS Development account with iOS App Development & Distribution certificates","\n  ","\n      ","  ","1.    Creating Provisioning Profile for Tested App","\n                  a.    Go to https://developer.apple.com/","\n                  b.    Click on Member Center and login using your iOS Developer Account","\n                  c.    Click on Certificates, Identifiers & Profiles","\n                         ","\n                  d.    Click on iOS Apps Certificates","\n                  e.    Validate your account has a valid iOS Development and iOS Distribution certificates","\n                         ","\n  ","\n                  f.    Create an App ID for your tested app (if existing one can’t be used):","\n                        I.    Click on Identifiers-> App IDs-> Add","\n                               ","\n  ","\n                       II.    Give the App ID some Name to be identified in the App IDs list","\n                      III.    Select Explicit App ID (Wildcard App ID can also be used) radio button","\n                       IV.    Set the Bundle ID as “com.ginger.<<AppName>>” (different Bundle ID can be used)","\n                                 ","\n  ","\n                        V.    Click Continue","\n                       VI.    Click Submit","\n                      VII.    Click Done","\n                     VIII.    Validate the new App ID was added to the list","\n                                ","\n  ","\n                  g.    Add your real device to the Devices list:","\n                        I.    Click on Devices-> All->Add","\n                               ","\n  ","\n                       II.    Set the real device Name as it appear in step 2 of \"Mobile iOS Testing Setup Device Setup\" file","\n                      III.    Set the real device UDID as it appear in ","step 2 of \"Mobile iOS Testing Setup Device Setup\" file","\n                              ","  ","\n  ","\n                       IV.    Click on Continue","\n                        V.    Click on Register","\n                       VI.    Validate the device was added to the Devices list","\n  "," ","\n  ","            h.    Create Provisioning Profile for the tested app","\n                        I.    Click on Provisioning Profile->All->Add","\n                                 "," ","\n  ","\n                       II.    Select Distribution -> Ad Hoc and click Continue","\n                                  ","\n  ","\n                      III.    Select the App ID you created in step 1.f and click Continue","\n                                 ","\n  ","\n                       IV.    Select your account iOS Distribution certificate and click Continue","\n                        V.     Select your real device which was added in step 1.g (you can select all devices)","\n                                  ","  ","\n  ","\n                       VI.    Give your provisioning profile a Name which will be used to recognize it","\n                                    ","\n  "," ","\n                      VII.    Click on Generate","\n                     VIII.    Click on the Download button for downloading the Provisioning Profile file to your Mac machine ","\n                                  ","\n  ","\n                       IX.    Click on Done","\n                        X.    Right click on the Provisioning Profile file which is on your Mac and select Open","\n                       XI.    Noting visible supposed to happen","\n  "," ","\n  ","2.    Sign and Install Tested App","\n          a.    Place the tested app Xcode project files (source code) on your Mac machine","\n                 (sample app called “UICatalog” can be downloaded from Here)","\n          b.    Open Xcode from Go-> Applications-> Xcode","\n                  ","\n          c.    Load the tested app Xcode project","\n          d.    Click on top menu Xcode->Preferences->Accounts and add your iOS development account","\n          e.    Select the application header on the left menu and select the Info tab","\n          f.    Set the Bundle Identifier value to be the same as the App ID Bundle ID you configured in the App ID you created in step 1.f","\n                  ","\n          g.    Select the General tab","\n          h.    Set below values:","\n                I.    Bundle Identifier- supposed to be he same as the App ID Bundle ID you configured in the App ID you created in step 1.f","\n               II.    Team- select your iOS development account","\n              III.    Deployment Target- select the minimum device platform (OS version) the application supposed to support (according to the testing devices you have)","\n               IV.    Devices- select “Universal” (to support iPhone and iPad)","\n                      ","\n          i.    Select the Build Settings tab","\n          j.    Expand the Code Signing section and set below values:","\n               I.    Code Signing Identity","\n                  o    Debug: iOS Developer","\n                  o    Debug->Any iOS SDK: iOS Developer","\n                  o    Release: iPhone Distribution- <<Your iOS Development Account>>","\n                  o    Release->Any iOS SDK: iPhone Distribution- <<Your iOS Development Account>>","\n              II.    Provisioning Profile","\n                  o    Debug: Automatic","\n                  o    Release: <<The Provisioninig Profile you created in step 1.h>>","\n                         ","\n  ","    k.    Select the real device you want to test the app on from the devices drop list (if your device appears as un available then try to save                 ","the ","project and restart Xcode application)","\n                   ","    ","\n  ","\n               l.    Click on the Run button","\n                      ","\n          m.    Xcode supposed to successfully build the app, sign it, install and run it on the real device","\n          n.    Stop Xcode by clicking on the Stop button","\n          o.    Not Mandatory: For creating an IPA file (app installation file) that can be sent to other users and allow them to configure appium                    ","to ","install and run the app without using Xcode:","\n                    I.    Click on top menu Product Archive","\n                   II.    Xcode will create archive of the app","\n                  III.    In Archives window select the latest archive and click on Export…","\n                          ","\n  ","\n                   IV.    Select Save for Ad Hoc Deployment radio button anf click Next","\n                             ","\n  ","\n                    V.    Select your iOS Development Account ancd click on Choose","\n                           ","\n  ","\n                   VI.    In Summary window, make sure the selected Provisioning Profile is the Provisioning Profile you created in step 3.1.h and click Export","\n  ","                    ","\n       ","\n                  VII.    Select export target (like Desktop) and click on Export","\n                 VIII.    Find the app.IPA file in the target location","\n                           ","\n  ","\n                   IX.    Send the app.ipa file to other users","\n          p.    Close the installed app on the device","\n          q.    Close Xcode (not have to)","\n  "," ","\n  ","3.    Launch and Test the App Using Ginger","\n          a.    Launch Appium server on the Mac machine according to steps in section 1.3","\n          b.    Launch Ginger (on the Windows machine which is in the same network like the Appium Mac machine)","\n          c.    Create Business Flow with the Mobile platform","\n          d.    Add new Agent, give it logical name and select the MobileAppiumIOS driver","\n                  ","\n          e.    Define the Agent Driver Configurations as follow:","\n                I.    StartAppiumServerAutomatically – “false” or “true” if you want Ginger to start Appium server automatically.","\n               II.     AppiumServerIP – set IP value for Appium server.","\n              III.    AppiumServerPort – Set specific port or “dynamic” if you wish Ginger to allocate free port for appium server.","\n               IV.    AppiumInstallationFolderPath - if StartAppiumServerAutomatically is set to “true” - insert your Appium installation folder path here.","\n                V.    AppiumServer – is Deprecated – keep empty and use AppiumServerIP and AppiumServerPort instead.","\n               VI.    DeviceName: Any Device name","\n              VII.    DevicePlatformVersion: Real device platform version ","\n             VIII.    DeviceID: the device ID you found in step 2.2","\n               IX.    In case the tested app is installed on the device:","\n                      InstalledAppPackage: The tested app Package found in step 3.1.d","\n                      InstalledAppActivity: The tested app Package found in step 3.1.d","\n                      Else, in case using the tested app APK file:","\n                      AppInstallerPath: The full path to the tested app APK file on the Appium server machine","\n                       ","\n  ","\n          f.    Save the Agent settings","\n          g.    Select the Business Flow created in step b and shift to the Automate tab","\n          h.    Select the Agent created in step c from the Agents selection in the ribbon","\n          i.    Click on Launch Agent","\n          j.    If you choose to start Appium Manually: Make sure that the connection request got to the Appium server, you supposed to see                        ","something like this in screen shot below","\n                ","\n          k.    Once the connection establish the app supposed to be launched on the tested device and the Appium Mobile Driver Window                          ","supposed ","to appear on Ginger and allow you to control it and start creating your automation  ","\n  ","          ","\n  "," ","\n\n"],"2":["Native/Hybrid App Testing on Real Device Setup"],"id":"109"})