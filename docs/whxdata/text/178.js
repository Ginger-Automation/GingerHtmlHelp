rh._.exports({"0":["Remote Web Driver"],"1":["\n  ","\n  "," ","\n  "," ","\n  ","1. What is Selenium-Grid?","\n           Selenium-Grid allows you run your tests on different machines against different browsers in parallel. That is, running multiple tests at      ","\n  ","     the same time against different machines running different browsers and operating systems. Essentially, Selenium-Grid support ","\n  ","     distributed test execution. It allows for running your tests in a distributed test execution environment.","\n         ","  1.1    When to Use it?","\n                     There’s two reasons why you might want to use Selenium-Grid.","\n                      a.   To run your tests against multiple browsers, multiple versions of browser and browsers running on different operating systems.","\n                      b.    To reduce the time it takes for the test suite to complete a test pass","\n  ","                  ","\n  "," ","\n  ","                  Information on Selenium Grid can be found at:","\n                        http://www.seleniumhq.org/docs/07_selenium_grid.jsp#","\n  ","                  https://github.com/SeleniumHQ/selenium/wiki/Grid2","\n                        http://www.guru99.com/introduction-to-selenium-grid.html","\n  "," ","\n  "," ","   1.2    Create New Solution","\n  ","             Default Ginger Data Source will be added to every new solution with the Name “GingerDataSource”.","\n  ","             The MDB file for the Data ","Source will be copied to the Data Sources Folder of the Solution in the File System. ","\n              ","\n      ","2.    Running Selenium Grid","\n  ","   "," 2.1    Configuring Selenium Grid Agent ","\n  ","            a) Go to Configurations Tab-> Agent and click on the ‘+’ button as shown below.","\n                        ","\n  ","\n                  b) In the below wizard enter the Agent name. Select the Platform type as Web and Driver Type as SeleniumRemoteWebDriver.","\n                      Click on the Next button ","\n  ","                 ","\n  ","      c) On Selenium Grid Hub field enter the IP where you wants to configure your hub, if you running your hub on your local machine you               can leave it untouched with the default value otherwise specify your hub IP and port and make sure to keep it with the same format             http://<IP>:<Port>. ","\n  ","           ","\n                         ","\n  ","      d) On Browser Name field select the specific browser you wants the agent to run on.","\n                  •    Note: Safari agent can be executed on Mac only.","\n                  •    Note: Edge can be installed on Windows 10 only.","\n            e) Browser Version (Optional) – if not specified it will refer to any.","\n            f) On Platform field select the specific Platform you wants the agent to run on.","\n            g) Node for all will create a generic node for all browsers available in the selected platform.","\n  "," ","\n  ","  ","  2.2    Starting the Hub and Nodes "," ","\n                  a. After configuring your agent, click on both Create Hub Installation package and Create Node Installation package.","\n  ","               ","\n         ","\n  ","            b. Once clicked new Dialog box will be started with both Zips files, extract them on your local or the remote machine.","\n                  c. Start hub by executing the starthub.bat, leave the window open for your execution.","\n  ","                ","\n  ","          d. Start the node by executing the startnode.bat file on your local or your remote machine and leave the window open for your ","\n  ","               execution.","\n  ","                 ","\n  ","                 •    This will raise a generic node which fits to 5 instances from any of the chosen browsers.","\n                       •    The Node is being executed with a Random Port, it might be that the port is already taken, ","\n  ","                       if this is the case you can simply create a new node by clicking the node button and execute the new startnode.bat file.","\n  ","           e. If you wish to execute the test on more Machines/Browsers you need to create new nodes by clicking the Create node installation ","\n  ","               package and executing the new startnode.bat file.","\n  ","                ","\n                    ","\n  ","    2.3    Checking console ","\n  ","         a. After starting the hub and nodes you may switch to Console tab to check for your hub and node status.","\n  ","                  ","\n  "," ","\n     ","\n  ","        b. Return to Configuration tab and click on Test Agent Configuration button, expected result – browser Instance is started and ","\n  ","             success message is pop upped.","\n  ","               ","\n  ","       c. Map your web target application to your new agent and execute your test.","\n  ","          Note: If you wish to execute multiple browsers in parallel you need to configure one agent for each browser.","\n                Note: Safari configuration have few more steps:","\n                    o    Download Safari driver from http://www.seleniumhq.org/download/","\n                    o    Open the driver with Safari and do to Safari->Preferences -> check the Show Develop menu checkbox ","\n                           -> Go to Develop and click Allow Remote Automation  ","\n\n"],"2":["Remote Web Driver"],"id":"178"})