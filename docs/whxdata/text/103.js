rh._.exports({"0":["Ginger Components in High Level"],"1":["\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Open/Create a solution","\n  ","\n  ","\n  ","       An existing Solution can be opened by clicking on the name drop down as shown below and click on the ‘Open Existing solution’ option.","\n  ","       A New solution can be created using the ‘Create New Solution’ option.","\n  ","           ","\n  "," ","\n  ","             "," ","\n  "," ","\n  ","\n  ","Solution","- A Solution is a logical structure which is a complete automation package in itself that can be ","\n  ","                    loaded and executed in GINGER. The first step to start with GINGER is to create a Solution. ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Business Flows Tab","        ","\n  ","\n  ","          This tab displays all the Business Flows in the solution. ","\n  ","          It also displays the Automation items like the Actions, Variables, Activities group and Activities available in the Business Flow.","\n  ","\n  ","               ","\n  "," ","\n  ","               ","\n  "," ","\n  ","\n  ","\n  ","\n  ","Business Flow","- Business flow is the group of activities which define one or more end to end function flow/test ","\n  ","                              scenario. Example, for a Telecom application, a meaningful flow can be creating a new BAN.","\n  ","\n  ","                           Here the details of the Business Flow like name, description, target ","\n  ","                           application, status, automation % and creator’s name are displayed","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","            Double clicking on the"," Business Flow 1",", it"," ","displays the"," ","Automation area where the Actions, Variables, ","\n  ","            Activities group and Activities are created.","\n  ","            Or click on ‘Automate’ button in the right panel to go the Automation area.  ","\n  ","            ","\n  "," ","\n  "," ","\n  ","            ","\n  "," ","\n  ","\n  ","\n  ","\n    ","Business Flows","        - It the set of Activities that are executed on the Target application. A solution can have multiple Business Flows.","\n    ","Activities                   ","– An Activity is defined as a group of actions to address a particular functional requirement "," as part of Business flow. ","                                     A Business flow can contain multiple activities.","\n    ","Variables                  ","–"," this is the area where new variables can be added in the solution","\n  ","\n  ","\n  ","      ","\n  ","Double click on the Business Flow to get inside it.","\n  "," ","\n  ","\n  "," ","\n  ","Here the Actions are added in the Activities which are the actual executables of the Target applications.","\n  ","Activity Group is a set of Activities.","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Run Tab","       ","\n  ","\n  ","\n  ","             ","Run tab is the area where the Run sets are created for execution.","\n  ","             For more details refer to ","Library-> Solution-> Run Sets"," of Ginger Help Index.","\n  ","\n  ","            ","\n  "," ","\n  ","            "," ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Configurations Tab","         ","\n  ","\n  ","\n  ","           All the configuration related items are created in this tab.","\n  ","\n    ","Target Application","  - This is the application on which the executable actions will be run like web, ","\n  ","\n  ","                                                 unix, java etc.","\n  ","\n    ","Agent                       ","– Agents are the drivers which are used for recording and execution for the target ","\n  ","\n  ","                                                application under test. Internal Browser is used for recording web application. This is in-","\n  ","                                                built and customized form of Internet Explorer.  Selenium IE/Firefox/Chrome drivers ","\n  ","                                                enable us to run scripts in these respective browsers. These Browsers are launched as ","\n  ","                                                separate browsers.","\n  ","\n    ","Reports     ","              ","– This is the area where the test results of the execution are displayed.","\n    ","Tags","                         ","– This is the area where the Tags can be created to identify a set of Automation ","\n  ","\n  ","                                                     ","items.","\n  ","\n  ","                     ","\n  "," ","\n  ","                     "," ","\n  ","\n  ","\n  ","\n  ","\n    "," ","Resources Tab","      ","\n  ","\n  ","\n  ","All the resources related items can be created in this tab.","\n  ","\n  ","\n  ","\n  ","\n    ","Shared Repository","  - This tab stores all the automation items of the Shared repository in the ","\n  ","\n  ","                                                 solution. These can be used in other Business Flows of the same solution.","\n  "," ","\n  ","\n  ","\n    ","Application Models"," - Auto Pilot is a machine-learning based testing automation functionality.","\n  ","\n  ","                                                 Auto Pilot functionalities enables automatic modelling/learning of application ","\n  ","                                                 capabilities in 4 model areas – front-end (UI), middle layer (APIs), back-end ","\n  ","                                                 processes and database.","\n  "," ","\n  ","\n  ","\n    ","Environments           - These can be used to store global details that will be used across multiple ","\n  ","\n  ","                                                 Business flows present in a solution. It can be used to store Database ","\n  ","                                                 connection details, Login Credentials, Unix Server details or any general ","\n  ","                                                 parameter one would want to be used across globally.","\n  "," ","\n  ","\n  ","\n    ","Global Variables","        - Variables that can be used in all the Business Flows of the solution are ","\n  ","\n  ","                                                 created in this tab.","\n  "," ","\n  ","\n  ","\n    ","Data Sources","              - It is the database that can be internally used for Ginger, either the MS Access ","\n  ","\n  ","                                                  or Ginger Data source can be used.","\n  "," ","\n  ","\n  ","\n    ","Documents ","                  - is a folder provided in the Ginger Solution folder where all the documents ","\n  ","\n  ","                                                    related to the Solution can be stored. It can be Output File generated from ","\n  ","                                                    the flow, Scripts if any or Templates","\n  "," ","\n  ","\n  ","\n    ","Plugins ","                      - Plugins are add-ons that adds specific feature to ginger. These are used by third party ","\n  ","\n  ","                                                 developers to create abilities which extend ginger and to easily adding new features. ","\n  ","\n  ","\n  ","\n  ","\n\n"],"2":["Ginger Components in High Level"],"id":"103"})