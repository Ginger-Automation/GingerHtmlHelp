rh._.exports({"0":["Java Execution Action User Guide"],"1":["\n  ","\n  ","The “Java Integration Action” should be used in case a Java executer need to be integrated in the automation flow.","\n      Using this action user is able to run the Java Jar with set of inputs sent from Ginger and process the returned values of the Jar.","\n  ","\n      ","How to Use It","\n         "," 1.    Setup the Java Executable (Jar)","\n              The Java executable need to be adjust to work with Ginger.","\n              Please find below the items which needs to be configured in it Main class:","\n              1.    Support for “-GingerHelp” command line arguments- when the Jar been executed using this argument then  it supposed to write to Console the Java executable description + the required parameters for execution","\n              2.    When the Java executable finish to do the work it meant to then it should write to Console the output values which Ginger require to show/parse inside “~~~GINGER_RC_START~~~”/“~~~GINGER_RC_END~~~”.","\n                  Please view below sample code for seen the exact required syntax:","\n                      ","\n  ","  ","\n         "," 2.    Setup the Action in Ginger","\n              Add the Action","\n              Please add the action as below:","\n               ","\n  "," ","\n  ","      ","  Configure the Action","\n              Please configure the action as below:","\n               ","\n          ","\n              Sample Output Values:","\n  ","          ","\n\n"],"2":["Java Execution Action User Guide"],"id":"140"})