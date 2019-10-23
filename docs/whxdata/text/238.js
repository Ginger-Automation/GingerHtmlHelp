rh._.exports({"0":["Android Testing Setup On MAC machine "],"1":["\n  ","\n  "," ","\n  ","These steps will allows Ginger to run tests on an USB connected Android device using Appium.","\n  "," Prerequisites","\n          i)    Ginger need to be installed on a Windows operating system machine.","\n  ","    ii)    The server can be installed on  Mac machine (Mac Mini, Mac Book, etc.) with OS X operating system (OS X Yosemite or later) is ","\n  ","           required","\n  "," ","\n  "," ","   ","     ","1.    Mac: Install Appium Prerequisites","\n  ","                1.1    Install latest Java JDK:","\n  ","                           a.    Download the latest Java JDK version from below link: ","\n  ","                                  http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html","\n                                           ","\n  ","\n                                 b.    Double click and install it","\n  "," ","\n  "," ","   ","             1.2    Install Homebrew:","\n                                 a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n                                 b.    Type and run below command:","\n                                        ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"","\n                                 c.    Make sure installation ended successfully","\n                                        ","Note:"," for allowing network access from the Terminal you may need an external network connection (non Amdocs) only"," for the installation purpose","\n  ","\n           ","    ","         1.3    Install Node:","\n                                  a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n                                  b.    Type and run below command:","\n                                          brew install node","\n                                  c.    Make sure installation ended successfully","\n  ","\n                        1.4    Install Android SDK Tools:","\n                                  a.    Go to https://developer.android.com/sdk/index.html","\n                                  b.    Click on Other Download Options","\n                                          ","\n  ","\n                                  c.    Download the SDK Tools Only which fits to Mac OS X","\n  ","                                        "," ","\n  "," ","\n  ","                            d.    Once it was downloaded and put it in desired place. Mark it full path, like in this below case it : ","\n  ","                                   “/Users/menik/android-sdk-macosx”","\n  ","                                     ","\n  ","       ","          1.5    Set the Environment Variables:","\n                                  a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n                                  b.    Type and run below command:","\n                                         nano ~/.bash_profile","\n                                  c.    Editor window will open in Terminal","\n                                            "," ","\n  "," ","\n  ","                            d.    Copy and paste to it below content","\n                                         export ANDROID_HOME=<<path_you_found_in_step_1.4.4.d>>","\n                                         export PATH=$ANDROID_HOME/platform-tools:$PATH","\n                                         export PATH=$ANDROID_HOME/tools:$PATH","\n                                         export JAVA_HOME=$(/usr/libexec/java_home -v <<your_Java_version_like_“1.8”>>)","\n                                         export PATH=/usr/local/bin:$PATH","\n  ","                                   ","\n  ","\n                                 e.    Click CTRL+O and then Enter in order to save this file","\n                                 f.    Click CTRL+X in order to close it","\n                                 g.    Open Terminal again (if it was closed) and type below command to apply the environment variables values:","\n                                         source ~/.bash_profile","\n                                 h.    Check that the new environment variables were saved by typing below command in Terminal and looking for the ","\n  ","                                  relevant"," variables and their value:","\n                                         ","   ","\n  "," ","\n  ","         ","        1.6    Install Additional SDK Tools Packages","\n                                  a.    Go to the Mac main menu bar -> “Utilities” -> “Terminal”","\n                                  b.    Type and run below command:","\n                                           android","\n                                  c.    Android SDK Manager will be opened","\n                                  d.    Mark below 3 Packages to be installed and install them","\n                                         ","         ","\n  ","                                      ","\n  ","                                         ","\n  "," ","\n  ","\n  ","                            e.    Make sure the installation ended successfully","\n  ","                                   ","\n  ","\n      ","     ","     ","2.    Mac: Install Appium ","\n  ","                       a.    Open the Appium Web site on the Mac machine (using Safari)","\n                                     http://appium.io/","\n                              b.    Click on Download Appium button","\n                                      ","\n  ","\n                              c.    Double click and install Appium application","\n                              d.    Launch the application from main menu bar “Go” “Applications”","\n                                      "," ","\n  ","\n                              e.    For checking that noting is missing, click on the “doctor” button in the Appium GUI","\n                              f.    Terminal window supposed to open and tests will be done for iOS and Android setup, make sure the Android one passed ","\n  ","                               successfully (iOS will be installed in different user guide)","\n                                    ","Note:"," in case the Appium doctor (or on Appium launch) identify that something is missing and asks you if to install ","\n  ","                                         it- answer YES","\n  ","                              ","\n  ","\n      ","           3.    Mac: Configure and Launch Appium Server ","\n  ","                       a.    Connect the Mac machine to the same network that Ginger Windows machine is in","\n                             b.    Get the Mac IP Address by:","\n                             c.    Go to main menu ","Go-> Applications-> System Preferences-> Network","\n                                     ","\n  ","\n                             d.    Copy the ","IP Address","\n                                     ","\n  ","\n                              e.    Launch (if not already launched) the Appium application from main menu bar ","Go-> Applications-> Appium","\n                              f.    Click on ","General Settings ","button","\n                             g.    Set the IP Address you found in step b into the ","Server Address"," field","\n                             h.    Configure the rest of settings as appear in below screen shot","\n                                      "," ","\n  ","\n                              i.    Close the General Settings window","\n                              j.    Click on ","Launch"," button","\n                                     ","\n  ","\n                             k.    Make sure appium is starting without errors","\n  ","                              ","\n       ","\n                              l.    Appium server is UP and ready to get connecting request from Ginger.","\n\n"],"2":["Android Testing Setup On MAC machine "],"id":"238"})