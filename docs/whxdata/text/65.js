rh._.exports({"0":["How to Install TestNG Plugin?"],"1":["\n  ","\n  ","Purpose","\n      The TestNG Plugin target is to allow executing TestNG Java/Maven projects tests from Ginger as integrative part of the Ginger test flow.","\n  ","Ginger TestNG plugin allows to:","\n          •    Configure Java/Maven TestNG execution by TestNG test configuration XML ","\n          •    Configure Java/Maven TestNG execution by free command line","\n  ","For above execution methods the Ginger TestNG plugin offers:","\n      •    Send execution Input Values by overwriting the TestNG test XML parameters values","\n      •    Get execution output values by parsing execution console values and look for “key=value” pairs","\n      •    Automatic TestNG execution results parsing and showing the below on Ginger Action/Report:","\n              o    Number of Passed/Failed/Skipped/Ignored/Total tests","\n              o    Executed Suite/s details","\n              o    Execution status of each executed Test","\n              o    Error details for Failed/Skipped tests","\n  ","Pre-requisites","\n      Please see below the items which needs to be set up on the testing environment before executing the TestNG plugin.","\n          1.  NET Core SDK Installation","\n              The plugin requires .NET Core SDK version 2.2 or above to be installed on the machine it running on.","\n              Please install it from below link:","\n              https://dotnet.microsoft.com/download","\n  ","    2.    Java Installation","\n                 Java installation is must for the plugin to work.","\n                 “JAVA_HOME” environment variable system configuration is also required in case not specifying specific path for the “java” executable in the Plugin Action definitions.","\n  ","    3.    Maven Installation","\n                 Maven installation is must just in case executing Maven Java project.","\n                 “MAVEN_HOME”/”M2_HOME” environment variable system configuration is also required in case not specifying specific path for the “mvn” executable in the Plugin Action definitions.","\n  ","    4.    Java/Maven Project","\n                 The Java/Maven project source files needs to be located on the machine which the TentNG Plugin running on.","\n                 It is recommended to place the project under the Ginger Solution “Documents” folder and use relative paths to it (like “~/Documents/MyJavaProject”) so it will work on any user machine. ","\n  ","How to Install TestNG Plugin?","\n      Ginger TestNG plugin needs to be added to the Ginger Solution in order to be used.","\n      Please follow below steps to perform it.","\n          1.   Go to Resources-> Plugins ->Download Plugins","\n  ","           Select TestNG and click on the Install button","\n  ","          ","\n  ","\n          2.    Once installation is done, Uninstalled button is displayed.","\n               ","\n  "," ","\n  ","    3.  Go to the Downloads tab, the TestNG should be displayed","\n  ","          ","\n\n"],"2":["How to Install TestNG Plugin?"],"id":"65"})