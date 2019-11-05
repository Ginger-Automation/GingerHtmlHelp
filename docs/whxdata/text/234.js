rh._.exports({"0":["Appium Server Installation"],"1":["\n  ","\n  ","These steps will allows Ginger to run tests on an USB connected iOS device using Appium.","\n  ","Pre-requisite","\n          •    Ginger need to be installed on a Windows operating system machine","\n          •    Mac machine (Mac Mini, Mac Book, etc.) with OS X operating system (OS X Yosemite or later) is required","\n          •    Ginger Windows machine and Appium server Mac machine must be located on the same network (can ping each other)","\n          •    Admin user to the Ginger Windows’s machine and Appium server Mac machine is required for installations. Steps for Mac machine password rest:","\n              a.    Restart the machine while holding “command + R” until apple logo is appearing (Apple keyboard may be required is using Mac Mini)","\n              b.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n              c.    In the command line write “resetpassword”","\n              d.    Select the required volume","\n              e.    Insert new password and confirmation then Save","\n              f.    Watch the following video for more instructions","\n                     https://www.youtube.com/watch?v=QNZkvrsDspo ","\n                     •    Apple Developer Account is required for installing Appium server and tested apps setup on the devices","\n  "," ","\n  ","Appium Server Installation","\n          All installation steps need to be done on the Mac machine using an Admin user ","\n      ","    1.    Install Appium Pre-requisites","\n              1.1    Install latest Java JDK:","\n                  a.    Download the latest Java JDK version from below link:  ","\n  ","                  ","http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html","\n                             "," ","             ","\n                  b.    Double click and install it.","\n  "," ","\n  ","        1.2.    Install Xcode and Command Line Tools:","\n                  a.    Go to below link (you will need to login with an Apple Developer account details):","\n                      https://developer.apple.com/downloads/","\n                  b.    Search for “Xcode”","\n                  c.    Download the latest (non Beta) “Xcode” version and it matching “Command Line Tools”","\n                           ","  ","\n                  d.    Double click and install them both","\n  "," ","\n  ","        1.3.    Install Homebrew:","\n                  a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n                  b.    Type and run below command:","\n                      ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"","\n                  c.    Make sure installation ended successfully","\n                      Note: for allowing network access from the Terminal you may need an external network connection (non Amdocs) only for the installation purpose","\n  "," ","\n  ","        1.4.    Install Node:","\n                  a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n                  b.    Type and run below command:","\n                      brew install node","\n                  c.    Make sure installation ended successfully","\n  "," ","\n  ","        1.5.    Install libimobiledevice and ideviceinstaller:","\n                  a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n                  b.    Type and run below command:","\n                      brew install -v --devel --fresh  automake autoconf libtool wget libimobiledevice","\n                      (if fails try:","\n                      brew install -v --fresh  automake autoconf libtool wget libimobiledevice)","\n  ","            c.    Type and run below command:","\n                      brew install -v --HEAD --fresh --build-from-source ideviceinstaller","\n                  d.    Make sure installation ended successfully","\n  "," ","\n  ","        1.6.    Install iOS Web Proxy","\n                  a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n                  b.    Type and run below command:","\n                      brew install ios-webkit-debug-proxy","\n                  c.    Make sure installation ended successfully","\n                  d.    More details on iOS Web Proxy can be found in:","\n                      https://github.com/google/ios-webkit-debug-proxy","\n                      http://appium.io/slate/en/master/?ruby#installation","\n  "," ","\n  ","    2.     Install Appium ","\n              1.    Open the Appium Web site on the Mac machine (using Safari)","\n                      http://appium.io/","\n              2.    Click on Download Appium button","\n                      ","\n  ","\n              3.    Double click and install Appium application","\n              4.    After Appium installed on your machine, you can set Ginger to Start Appium Server Automatically or do it manually,                                    ","by setting “StartAppiumServerAutomatically” parameter in an Agent.","\n                  If StartAppiumServerAutomatically parameter set to “false” you will need to start Appium server manually (Read section 1.3).","\n                  set StartAppiumServerAutomatically parameter to “true” and Ginger will start Appium server automatically in the background.","\n              5.    When StartAppiumServerAutomatically set to true, you will need to insert your Appium installation folder path:","\n                      ","\n  ","        6.    AppiumServerIP – set IP value for Appium server.","\n                  AppiumServerPort – Set specific port or “dynamic” if you wish Ginger to allocate free port for appium server.","\n                  AppiumServer – is Deprecated – keep empty and use AppiumServerIP and AppiumServerPort instead.","\n                  (Read section 5.2 for more details)","\n  "," ","\n  ","    3.    Configure and Launch Appium Server Manually ","\n              a.    Launch the application from main menu bar “Go”-> “Applications”","\n                     ","\n              b.    For checking that noting is missing for iOS testing’s, click on the “doctor” button in the Appium GUI","\n              c.    Terminal window supposed to open and tests will be done for iOS and Android setup, make sure the iOS one passed successfully                   ","(Android will be installed in different user guide)","\n                      Note: in case the Appium doctor (or on Appium launch) identify that something is missing and asks you if to install it- answer YES","\n                     ","\n  ","        d.    Connect the Mac machine to the same network that Ginger Windows machine is in","\n              e.    Get the Mac IP Address by:","\n                   I.    Go to main menu Go->Applications->System Preferences->Network","\n                           "," ","\n  ","\n                  II.    Copy the IP Address","\n                          ","\n  ","\n              f.    Launch (if not already launched) the Appium application from main menu bar Go->Applications->Appium","\n              g.    Click on General Settings button","\n              h.    Set the IP Address you found in step b into the Server Address field","\n              i.    Configure the rest of settings as appear in below screen shot","\n                    ","     ","\n  ","        j.    Close the General Settings window","\n              k.    Click on Launch button","\n                      "," ","\n              l.    Make sure appium is starting without errors","\n                     "," ","\n              m.    Appium server is UP and ready to get connecting request from Ginger!","\n\n"],"2":["Appium Server Installation"],"id":"234"})