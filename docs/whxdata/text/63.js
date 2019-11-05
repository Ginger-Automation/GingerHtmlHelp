rh._.exports({"0":["How to use Java Driver & Widgets in Ginger"],"1":["\n  ","\n  ","Description   "," ","\n      This steps will explain how to work with Ginger Java Driver on any Java application OMS, CRM, Java and widgets (Web embedded in java application). ","\n      Java Agent offers:","\n         a.    Automate Java Application. ","\n         b. Automate Web Embedded Widgets.","\n         ","\n      ","Pre Requisites","\n      1.    Latest Ginger version.","\n      2.    JDK version 1.6_29 and up installed on the machine.","\n  ","1.    Configure solution to work with Java Driver","\n          1.1    Add Java Agent to the Solution.","\n              a.    Click on + button.","\n                    ","\n  ","\n              b.    Select Java Platform. Driver and type are automatically populated. Click on Next button","\n                  ","\n  ","         c.  Enter settings if different from the default ones and click on the Finish button.","\n  ","              ","\n  ","    1.2    Add Java to the target application.","\n  ","        a.    Click on the desired Business Flow and click on the Details tab.  Click on the Edit button.","\n                    ","\n  ","\n              b.    Check the checkbox of the the MyJavaApp and click on the Ok button. Save the changes.","\n                     ","\n  ","2.    Launch your Java application","\n  ","         While using the launch java application action you will fire your java application and attach the Agent to the application.","\n                2.1    Verify the Activity has target application as Java.","\n                         ","\n  ","            2.2    Configure Java Launch application Action.","\n                           This action will enable you to:","\n                           •    Launch java application and attach the agent for using java driver to automate your application.   ","\n                           •    Attach the agent to running Java application. ","\n                           •    launch your java application without attaching the agent (use if u are using other agents to automate your application","\n  ","                         a.    Add new action by clicking the Add action button-> Actions Library","\n                               b.    Move to General action tab and select the “Launch java application”.","\n                                   ","\n  ","                         c.    Edit launch java application action.","\n                                     ","\n  ","                            1.    Java Version Path – Used for selecting the path for JDK location, you can select the first option ","\n                                         if the JDK is set in your environment variable or the second option if the JDK is located in ","\n                                         different location on the machine. In any case JDK is a must in order to run this action.","\n                                 2.    Launch Java Application – check this option if you want both launch the java application and attach","\n                                       the agent. You can also use this Action just for attaching the agent to already running java ","\n                                       application by uncheck this section.","\n                                       Java Application Path – Add your application location is you are using to run CRM, add the full ","\n                                       domain location for the JNLP.","\n                                        Use the “Add Parameter to Launch Application With” button if u need to launch your application ","\n                                       with parameter like user name.","\n                                         ","\n                                  3.    Wait for Java Application Window – Add the title of the window that you are expecting to be open ","\n                                          once your application is launched and the time to wait for it (sec).","\n                                  4.    Attach Ginger Java Agent – use this to attach the agent to the application, by default the location","\n                                        of the agent is located in ginger folder. You can also change the port if 8888 is being used by different program.","\n                                     "," Notice: ","\n                                         1.    Java Launch Action need to be on Separate Activity it can’t be with Other","\n                                                Action, as u can see below Activity \"Init1\" has only one Action.","                                         ","\n                                                  ","\n  ","                                              In the Activity 2 \"Java Element Action and Swicth Window\", we have the other actions like login etc.","\n  ","                                             ","\n  ","    ","\n      ","3.    Working with Java Agent on Java Application","\n       ","     3.1    Working with Window Explore","\n                      Window Explore will enabled you to identify objects on the screen, add locators (Xpath, id, etc.) for the ","\n                      object and actions that can be done (set, get, validate etc.).","\n                       a.    Run the launch Java application Action. Once the application is up and running you can start the agent  ","\n                             by clicking on the button as shown below.","\n                               ","\n  ","    ","\n  ","                b.    Once the above button turns green, click on 'Add Actions' button. Expand the Explorer.  ","\n  ","                       Select the application in the window drop down.","\n                              ","\n  ","       ","          c.   You can also switch the view from tree View to Grid View by clicking on this Button. ","\n  ","                       ","\n  ","              d.    Add switch window action whenever a new window is displayed in Java app. This is done in order to set the focus on the                                window ","we want to work on.  For this, expand the Live Spy section and click on the + button. This will add “Switch Window” action to the activity.","\n                             ","\n  ","\n                    Once you add the switch window action u can Edit it and add “Sync Time” that means how much time ","\n                    To wait for the window to come up.","\n                     ","\n  ","        ","           ","\n  ","\n      ","    3.2    Working with Spy","\n  ","        a.    Click on the spy icon.","\n  ","               ","\n  ","\n              b.    Once Clicked on spy button move your cursor to the element you want and press on Ctrl,","\n                     Once element found all details will be available.","\n                     For Example if you want to work on the Employee Id text box :","\n  ","               ","\n                   1.    Text box we want to work on, move your cursor to First name and press on Ctrl.","\n                   2.    Actions – this are all the actions that available for this control Set, get ,Validate etc..","\n                   3.    Locators – this is how we are locating the element in this case we have ByName or by Xpath","\n                                            We recommend to work with Xpath.","\n                   4.    Value – value to set on the text box.","\n                   5.    Playback – once setting the value you can test the action.","\n                   6.    Add to Activity – Add this Action to the flow in Ginger.","\n                         This is the way we are working with all elements, Drop Down list radio Button Check box tables etc.","\n  ","\n        ","  3.3 Working with Recording.","\n                  a.    Click on \"Add Actions\" (+) button. Then click on the Record Button and start your flow.","\n                         Do all actions you need.","\n  ","                     ","\n  ","                   ","\n  ","\n              b.    Once Done, click again on Stop button to stop the recording. You can see that all actions were automatically add to the activity.","\n  ","                 ","\n  ","                ","\n  ","4.    Working with Widgets (Web Embedded)","\n               Widgets are Web pages that Embedded in CRM \\OMS running on JExplore process, ","\n                We are handling it by injecting java scripts in to the web page and that enable us to interact with the page.","\n  ","          a.    Open window explorer refresh the window list and select the window were the web Page is embedded.","\n  ","                  ","\n  ","    b.    Click on the switch window action and add it to the activity ","\n  ","            ","\n  ","    c.    In order to get the elements to window explore we need to inject the JS to the page","\n                 Click on Grid View.","\n                  ","\n  ","\n          d.    In the search box type JE and find the Jexplorer object in the grid select locator as Xpath and ","\n                 Add the action to the activity ","\n  ","           ","\n  ","    e.    Once Done with all activities above you can start working with the spy","\n              To add the actions. ","\n  ","       ","\n  ","\n          f.    Activity that works with widgets action should be in this order","\n                ","\n  ","Appendix: ","\n      1.    Working with IFRAME (Widgets)","\n          There are web pages that the content of the page is inside IFRAME so in Order to handle that","\n          We need to add Switch Frame action.","\n          a.    Once we add the Switch window and JExplorer Actions we need to add Switch Frame action","\n  ","        ","\n  ","    b.    This is how IFRAME activity IFRAME should be handled ","\n            ","\n  ","2.    Working With GTB and Java Driver","\n  ","    a.    Use Different Ports,  verify that you are not using the same port on GTB and Java Driver","\n              Check your GTB port in this case it is 9999","\n  ","         ","\n  ","        So when you use launch java application action check that you are not using the same port ","\n               ","\n  ","    b.    On the java launch application action turn off the “show ginger Agent console” option.","\n  ","        ","\n          c.    Use different activities for java Driver and GTB","\n  ","\n      3.    Using Wait for Idle action on Java Application","\n          Once we are adding Action like Click, we have the option to select wait for Idle,","\n          Wait for Idle Enable you to set the interval and timeout to check if application is done with processing all ","\n          events and idle to proceed with next actions.","\n          ","\n  ","4.    Using Smart Sync Action on Java Application","\n  ","      Smart Sync will help you sync between the Automation steps and the application","\n             We have 2 types:","\n               1.    WaitUntilDisaper – set wait time and check until element disappear.","\n               2.    WaitUntilDisplay – set wait time and Check until element is Displayed.","\n  ","         Click on Add new Action.","\n               From the list of actions select “Smart Sync Action”","\n                 ","\n  ","                 a.    Click on the window Explore Icon and Add your element","\n                       b.    Set the Action Type.","\n                       c.    Set Wait time.","\n  ","          ","\n          ","\n      5.    Set Date of Birth on CRM screen using Java Driver","\n  ","       While setting and Date-type field on the CRM, we need to configure our Edit Java Element Action as per the ","\n              highlighted fields shown in the screenshot below.","\n  ","       ","\n      ","\n\n"],"2":["How to use Java Driver & Widgets in Ginger"],"id":"63"})