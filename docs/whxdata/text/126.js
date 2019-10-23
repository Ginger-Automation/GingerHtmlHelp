rh._.exports({"0":["How to Configure Database Action?"],"1":["\n  ","\n  ","1. Pre-requisite"," ","\n          A Solution should be created.","\n          A Data source should be defined. Either Define it in the Ginger’s DataSource or define the ","\n          database details in the environment.","\n       ","\n      ","2. Creating Ginger Data Source","\n  ","    a)    When a new solution is created, default Data Source is automatically added.","\n                 It has Key table and customized table.","\n  ","          ","\n     ","\n  ","    b)    To add another “ Key_Table”, right click on the GingerDataSource, select Add New table-> Add New Key Value table.","\n  ","           ","\n          ","\n  ","\n          c)     Define the key data in the area “ Key_Data” using the + button as shown ","\n                                ","\n                  ","\n                                 ","\n  ","\n          d)    The Customized database is manually added using the + button as shown by the arrow","\n  ","           ","\n                            ","\n  ","3. How to Define Database in Ginger","\n       ","\n          a)    In the Solution tab, go to Environments->Default. Then click the desired platform where the database should be connected.","\n          b)    Go to the Database tab. Click the + button to add the database connection details.","\n  ","            ","\n  ","4. Action Operation","\n                            ","\n          a)    Double click on the Business flow. In the Activity Actions, click on ‘Add New’ button","\n                     ","\n  ","\n          b)    Go to the ‘General Actions’ tab and select the ‘DataBase Action’ then click on ‘Add Action’ button given in the below window","\n                   ","\n  ","             ","\n          c)    Below screen should be displayed.  Select the “Environment Application Name”, “Environment Application DB Name”                              and the “DB Operation Type” from the respective drop downs.","\n                   ","\n  ","\n          d)    The ‘DB Operation Type’ drop down contains the below options. Select the desired option.","\n                  ","\n  "," ","\n  ","              i)    Free SQL – It allows you to enter a free sql query ","\n  ","             ii)    Record count- It allows you to return the count from a table giving an example of the query","\n                     ","\n  ","\n                 iii)    Simple SQL One value – this is sued when a query is going to return  one value output.","\n  ","                  Here you select the table from the list of tables in the database.  Column is selected from the list of columns in the selected table. ","\n                        You can add a where clause if required.","\n                        ","\n  ","\n                 iv)    Update DB- this will update the Database with the query that you will provide. ","\n  ","                   There are 2 options, viz. provide a free sql to update the DB or use a file which has multiple queries.","\n                          You have to select the “Do commit after Update” check box to commit the changes to the DB.","\n                          ","\n  ","    e)  ‘Input type’ as ‘From File’ can also be selected. For this, the file needs to have a set of SQL commands.","\n                Below screen will be displayed which will give Browse option to select the file.","\n                The check box ‘Import SQL file to Solution folder’ will be checked by default.                                                                                              ","This will copy the file from the given location to the Ginger Solution folder.","\n  ","             ","\n       ","\n          f)    Run Action will execute the Action.","\n\n"],"2":["How to Configure Database Action?"],"id":"126"})