rh._.exports({"0":["How to get Output Values from TestNG Flow to Ginger Flow?"],"1":["\n  ","\n  ","TestNG plugin supports getting output values from the TestNG Flow.","\n      It been done by parsing all values which the TestNG flow write to the Console during execution, the parsing mechanism looks for any “key=value” pair and if it been found so the Key ","\n      and Value been added to the Action Output Values list.","\n  ","TestNG plugin also supports getting all the Errors which been written to the Console during TestNG Flow execution and Fail the Ginger Action in case Error exist. ","\n      For enabling it you should check the “Fail Action Due To Console Errors”","\n  ","\n      ","How to Get Output Values from TestNG Flow to Ginger Flow?","\n  ","\n      ","1.    Prepare the TestNG Flow Code for Sharing Output Values","\n          a.    Open the Java project in Eclipse or other IDE","\n          b.    Look for the places in code (either tested class methods or actual test methods) which in them you have value that can be shared with Ginger during execution","\n          c.    In each such place, add “System.out.println()” line of code with the Value key name equal to the value need to be shared, see sample below:","\n              ","\n  ","\n      ","2.    Configure Ginger TestNG Plugin Action to Read Output Values","\n          a.    Configure any one of the TestNG Actions configurations","\n          b.    For the Action to read and parse the Console outputs, check the “Parse Console Outputs” check box","\n          c.    After execution end, go to Action “Output Values” tab and see all output values which were parsed in run time","\n          d.    Now you can set Validations on top of those values or pass them to Variables/Data Source or other to be used in next Actions/other in the Ginger flow","\n              ","\n\n"],"2":["How to get Output Values from TestNG Flow to Ginger Flow?"],"id":"69"})