rh._.exports({"0":["Action Output Simulation"],"1":["\n  ","\n  ","Simulation Mode allows Ginger end users to simulate required outputs from services which are either not yet implemented or temporarily unavailable (web services, portals etc.). The mode is available for all Ginger Platforms and all Ginger Actions. ","\n  "," ","\n  ","1.    Configuration","\n  ","\n               ","Action Level configuration","\n               Open the action for which you want to simulate output, and go to ‘Output Values’ tab","\n               By default ‘Support Simulation’ checkbox is unmarked.","\n  ","           ","\n  "," ","\n  ","    ","\n  "," ","\n  ","By checking the checkbox the view of Output Values fields will change, 3 new columns will be added to the view : “Simulated Actual” , “…”,”<<” :","\n  ","    ","\n  "," ","\n  "," ","\n  ","         The user can populate the “Simulated Actual” field manual or use the “…” to populate the field using the Value Editor Expression window. ","\n  ","        Another option is to use the”<<” button to copy the actual value field to the “Simulated Actual” field.  ","\n  ","          ","          ","\n  ","      ","\n  "," ","\n  ","        ","Business Flow Level configuration","\n              Go to the Business Flow and click on the ‘All Execution Configurations’ button:","        ","\n  ","          ","\n  "," ","\n  ","           The Run in simulation mode checkbox is displayed in the Configurations window.","\n  ","           "," ","\n  ","\n       ","\n              ","Ginger Runner Configuration","\n               In the run tab go to the Ginger window and click on the configurations icon","\n  ","         ","\n  ","         ","\n                Click the ‘Run in simulation mode’ checkbox:","\n  ","          ","\n  ","\n       ","\n      ","2.    Execution ","\n  "," ","\n  ","         ","Action Level ","\n               At this point if the action will not be executed. Ginger mechanism will copy the value from ‘Simulated Actual’ column to the ‘Actual’ column and will compare its value to the one populated in the ‘Expected’ column. ","\n  ","         The action is not going to be executed but rather based on output validation the action will be Passed/Failed","\n  ","          ","\n  "," ","\n  ","          When the ‘Support Simulation’ checkbox is marked in the action a button ‘Simulate Run’ will be visible clicking it will execute the action in simulation mode:","\n                ","\n  ","\n               ","Activity/Business Flow"," ","\n              When the check box is marked any actions that are marked as output simulation will be run as such, if the activity contains actions              ","that require an agent start, the agent will be started. For example a browser window will be launched.","\n  ","         In the activity grid a checkbox allows the user to select whether the action will be executed in simulation mode, if no special                       ","configuration was made in the simulated values fields then there is a possibility that the action will fail. ","\n               After an action was executed it will indicate in the Extra info column execution mode.","\n  ","           "," ","\n  ","       "," Ginger Runner level ","\n              Any business flows added to this ginger runner depending if they have any actions with output simulation marked will be executed in simulation mode.","\n  "," ","\n  "," ","\n\n"],"2":["Action Output Simulation"],"id":"136"})