rh._.exports({"0":["How to Execute & get Output Values from Groovy Script ?"],"1":["\n  ","\n  ","How to Execute an Groovy Script? ","\n  ","    1. Execute groovy script using external file.","\n              a.    Add Business Flow or select existing one and click on “Automate” for loading it in Automate page","\n              b.    Click on Add Action button, in loaded window go to “Plugins Actions”","\n              c.    Select “Execute Groovy Script File” Action","\n  ","              ","\n  ","\n              d.    Set Action configurations according to the below:","\n  ","           ","\n  ","\n    ","\n      ","\n        ","\n          ","Field Name","\n        ","\n        ","\n          ","Mandatory?","\n        ","\n        ","\n          ","Field Description","\n        ","\n        ","\n          ","Sample Value","\n        ","\n        ","\n          ","Comments","\n        ","\n      ","\n      ","\n        ","\n          ","Overwrite Groovy Home Path","\n        ","\n        ","\n          ","No","\n          ","(assuming “GROOVY_HOME” system variable was configured)","\n        ","\n        ","\n          ","Full Path of groovy executer (groovy.bat in windows or groovy in Linux).","\n          ","If value not been set (recommended) so “GROOVY_HOME” system environment variable value will be used automatically.","\n          ","If “bin\\groovy” is missing from provided path so it been added automatically.","\n          ","\n        ","\n        ","\n          ","“C:\\ Program Files \\Groovy\\groovy-2.5.5\\bin\\groovy.bat”","\n          ","\n        ","\n        ","\n          ","For allowing the Action to run on any machine It is recommended to configure the “GROOVY_HOME” system variable on the running machine and to keep this Action field value empty","\n        ","\n      ","\n      ","\n        ","\n          ","Groovy Script Path","\n        ","\n        ","\n          ","Yes","\n        ","\n        ","\n          ","Full Path of the groovy script file.","\n          ","\n        ","\n        ","\n          ","“C:\\Work\\Groovy\\"," ","BasicScript.groovy”","\n        ","\n        ","\n          ","For allowing the Action to run on any machine It is recommended to place the groovy script file under the Ginger Solution “Documents” folder and set a relative path to it in Action definitions like:","\n          ","“~\\Documents\\Scripts\\BasicScript.groovy”","\n        ","\n      ","\n      ","\n        ","\n          ","Input Parameters","\n        ","\n        ","\n          ","No","\n        ","\n        ","\n          ","Add groovy input parameters as per requirement.","\n        ","\n        ","\n          ","\n        ","\n        ","\n          ","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","          ","\n  ","\n          2.     Execute groovy script using content.","\n  ","        a.    Add Business Flow or select existing one and click on “Automate” for loading it in Automate page","\n              b.    Click on Add Action button, in loaded window go to “Plugins Actions”","\n              c.    Select “Execute Groovy Script” Action","\n  ","              ","\n  ","\n              d.    Set Action configurations according to the below:","\n  ","               ","\n  ","\n    ","\n      ","\n        ","\n          ","Field Name","\n        ","\n        ","\n          ","Mandatory?","\n        ","\n        ","\n          ","Field Description","\n        ","\n        ","\n          ","Sample Value","\n        ","\n        ","\n          ","Comments","\n        ","\n      ","\n      ","\n        ","\n          ","Overwrite Groovy Home Path","\n        ","\n        ","\n          ","No","\n          ","(assuming “GROOVY_HOME” system variable was configured)","\n        ","\n        ","\n          ","Full Path of groovy executer (groovy.bat in windows or java in Linux).","\n          ","If value not been set (recommended) so “GROOVY_HOME” system environment variable value will be used automatically.","\n          ","If “bin\\groovy” is missing from provided path so it been added automatically.","\n          ","\n        ","\n        ","\n          ","“C:\\ Program Files \\Groovy\\groovy-2.5.5\\bin\\groovy.bat”","\n          ","\n        ","\n        ","\n          ","For allowing the Action to run on any machine It is recommended to configure the “GROOVY_HOME” system variable on the running machine and to keep this Action field value empty","\n        ","\n      ","\n      ","\n        ","\n          ","Groovy Script Content","\n        ","\n        ","\n          ","Yes","\n        ","\n        ","\n          ","Copy-Paste groovy script.","\n          ","\n        ","\n        ","\n          ","class BasicScript","\n          "," {   ","\n          ","static void main(String[] args)","\n          "," {","\n          "," println 'Groovy world!';   ","            ","\n          ","}","\n          ","}","\n        ","\n        ","\n          ","\n        ","\n      ","\n      ","\n        ","\n          ","Input Parameters","\n        ","\n        ","\n          ","No","\n        ","\n        ","\n          ","Add groovy input parameters as per requirement.","\n        ","\n        ","\n          ","\n        ","\n        ","\n          ","\n          "," ","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","How to get Output Values from Groovy Flow to Ginger Flow?","\n  ","    Groovy plugin supports getting output values from the Groovy Flow.","\n          It been done by parsing all values which the Groovy flow write to the Console during execution, the parsing mechanism looks for any “key=value” pair and if it been found so the ","\n          Key and Value been added to the Action Output Values list.","\n  ","    1.    How to Get Output Values from Groovy Flow to Ginger Flow","\n              1.1    Prepare the Groovy Flow Code for Sharing Output Values","\n                  a.    Open the Script in notepad or another Editor.","\n                  b.    Look for the places in code (either tested class methods or actual test methods) which have values that can be shared with Ginger during execution","\n                  c.    In each such place, add “println()” line of code with the Value key name equal to the value need to be shared, see sample below:","\n  ","                  ","\n  ","\n              1.2    Configure Ginger Groovy Plugin Action to Read Output Values","\n                  a.    Configure any one of the Groovy Actions configurations","\n                  b.    After execution end, go to Action “Output Values” tab and see all output values which were parsed in run time","\n                  c.    Now you can set Validations on top of those values or pass them to Variables/Data Source or other to be used in next Actions/other in the Ginger flow","\n  ","                    ","\n  "," ","\n     ","\n\n"],"2":["How to Execute & get Output Values from Groovy Script ?"],"id":"94"})