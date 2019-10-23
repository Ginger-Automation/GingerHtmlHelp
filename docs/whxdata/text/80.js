rh._.exports({"0":["Ginger End To End Flow – Do It Yourself"],"1":["\n  ","\n  ","\n  ","\n  ","OBJECTIVE:","\n  ","This exercise will help you automate a small flow using GINGER. ","\n  ","Here we will see the steps on how we automate the flow of launching URL ","http://abeat.amdocs.com"," and logging in with some credentials. ","\n  ","Also,"," we will understand customizing the execution report as per our requirement.","\n  ","           1.  To create a solution click on the drop down as shown below and select ‘Create New Solution’ option.               ","\n  ","                     ","\n  "," ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","In the pop window, enter the name of the solution (as shown below) browse to the location of the folder where you wish to save your solution.","\n  ","\n  ","     ","\n  ","\n  ","\n  ","\n  ","           Since we are automating a website flow select the application as “MywebApp” and platform as “WEB”. On click of create a solution is created successfully.","\n  ","\n  ","\n    ","This will load the solution as shown below.","\n  ","\n  ","            ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","Go to the Configurations tab and click on Agents.  ","\n  ","\n  ","          In the left panel, the agent is automatically created for the “MyWebApp”. ","\n  ","          The default driver for WebApp application is Internet Explorer “SeleniumIE” and the driver type can be changed if needed using the drop down.","\n  ","             ","   ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","Once the solution and agent are created, double click on the Business flow and it will take you to the automation area.","\n  ","\n  ","          In this window, you will see various sections like Variables, Activities Group , Activity-Variables and Activity Actions.","\n  ","           By default, Activity1 is added as shown below. ","\n  ","            "," ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","Expand the ‘Business Flow Variables’ section and click on the + sign to create a new variable which can be used within the Business Flow.","\n  ","\n  ","          ","  ","\n  ","\n  ","\n  ","                     Here we will use the variable to give the name of the website which we intend to open as part of our automation flow.","\n  ","                    Select the variable type from the list shown like in our case the website name will be variable string as highlighted in the list below.","\n  ","                      ","    ","\n  ","\n  ","                    "," In the pop window enter the variable name as “Website” and the string value as"," ","http://abeat.amdocs.com"," since  this is the URL we will open as part of automation","\n  ","                      ","    ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    ","The variable gets added in the variable window. Now we need to add action using the + sign in the action section. Actions are executable on various platforms.","\n  ","\n  ","            ","\n  ","\n  ","\n  ","                    On clicking + one will see platform specific actions. Since we have chosen platform as website hence web relat actions will be displayed. General Actions are not platform specific.","\n  ","                    Since we want to launch a website in this URL hence we will select “Browser Action” ","\n  ","                     ","     ","\n  "," ","\n  ","\n  ","\n  ","\n  ","                   In the screen below, select the ‘Operation Type’ as ‘Goto URL’","\n  ","                     ","    ","\n  ","\n  ","\n  ","\n  ","                   Since we have assigned the website name in a variable we will browse that variable name in the URL textbox. For this click on “…” button near the URL textbox as shown below.","\n  ","                   Double click the ‘Website’ variable on the left pane. The variable gets added in the editor area and click Ok button of the ‘Value Expression Editor’ window and the Action window.","\n  ","                       ","  ","\n  "," ","\n  ","\n  ","\n  ","\n    "," Now run the action by clicking on RUN ACTION and agent will automatically be launched.","\n  ","\n  ","              ","\n  "," ","\n  ","\n  ","                      And you will see the URL opened as below.","\n  ","                         ","   ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","To record a particular flow, click on ‘Open Window Explorer’ button in the Agent area click on the highlighted icon (Yellow)","\n  ","\n  ","            ","\n  "," ","\n  ","\n  ","\n  ","                    It opens a ‘Window Explorer’ window. Click on “Start recording”. ","\n  ","                     ","\n  ","\n  ","                    Now go back to the browser window and enter the credentials as shown below","\n  ","                     ","    ","    ","\n  "," ","\n  ","\n  ","\n  ","\n  ","                    Stop the recording once the flow to be captured is done.","\n  ","                        ","   ","\n  "," ","\n  ","\n  ","\n  ","                     Once the recording is completed one can also the see the set of recorded actions in the activity action tab.","\n  ","                        ","   ","\n  ","\n  ","\n  ","\n  ","                   One can change the name of the action by clicking on each action and giving a relevant name as below.","\n  ","                        ","    ","\n  ","\n  ","\n  ","                    Also,"," put some wait time between actions wherever necessary in the wait text box as shown in screenshot above.","\n  "," ","\n  ","\n  ","\n    "," Now to create a run set go to the RUN tab.","\n  ","\n  ","             ","\n  "," ","\n  ","           Click on the + button as shown by the arrow below to add the required Business Flows.","\n  ","\n  ","           In the displayed window, select the Business Flow and click on Select button.","\n  ","              "," ","\n  ","\n  "," ","\n  ","                      The Activities & Actions in the Business Flow gets added to the Run set.","\n  ","                        ","     ","\n  "," ","\n  ","\n  ","\n  ","                      Now go to the Operations tab in the Run set ","\n  ","                      Here you can send the report that will be sent once the execution is completed.","\n  ","                          ","   "," ","\n  "," ","\n  ","\n  ","\n  ","                       Once the report is configured save the run set.","\n  ","                           ","   "," ","\n  "," ","\n  ","\n  ","\n  ","                       To run the run set, click on the RUN button as shown below.","\n  ","                           ","   ","\n  "," ","\n  ","\n  ","\n  ","                        One can see the progress of the execution by the status displayed at the corner of the business flows, activities and actions as shown below.","\n  ","                          ","\n  ","\n  ","\n  ","\n  ","                       Once the execution is complete a mail is sent showing the outcome of passed and failed test cases like below. It also shows the run set details with the execution start and end time.","\n  ","                       There is also a zipped html with the mail containing the html report with all the details like below.","\n  ","                         ","    ","\n  ","\n  ","\n\n"],"2":["GINGER END TO END FLOW – DO IT YOURSELF"],"id":"80"})