rh._.exports({"0":["Data Source Action"],"1":["\n  ","\n  ","Ginger Data Source Action will be used to Get/Set/Mark Row As Done in the Data Source Table. It can be added from General Actions tab in Actions Library under 'Add Actions' section.","\n  ","\n  ","\n  ","\n      ","\n           "," After loading the Edit Action Screen for Data Source Action you will need to populate the Action Type Configuration Section to:","\n      "," ","    1.    Choose the Action want to perform","\n                      You can choose either of the one option depending upon your requirement","\n                         •    Get Value","\n                         •    Set Value","\n                         •    Mark As Done","\n  ","\n        ","   2.    Identify the Data Cell which needs to be manipulated","\n                   ","   Data Source Config Page can be opened from below:","\n  ","\n    ","Value Expression Editor Page (For Input Data)","\n    ","Output Grid (To Save Data in Data Table)","\n  ","\n  ","\n  ","              Value Expression can be now used to read from Data Source and use it as input data for Action. You will find the Data Source                           Hierarchy  in Value Expression Component Tree.","\n  ","                 ","\n                         ","\n                      You can double click on the Data Source Table Item to open Data Source Config Page.","\n  ","    "," 3.    Data Source Config – Output Grid","\n                     If you want to store the output of the Action to Data Source Table. You can do that by clicking on the Store to Data source button             from output grid as shown below.","\n  ","                ","\n       ","\n                   It will open the Data Source Config Page.","\n  ","    4.    Data Source Config Page – Configuration","\n                  Data Source Config Page will allow us to point to a cell in the table which should to which user want to read/write the data in                   Data Table. Data Source Config Page is divided to below 4 Sections:","\n                  ","\n  ","              1.    Data Source Table Details Section","\n                             This Section contains the List of the available Data Sources of the Solution and its corresponding Data Table Names. ","\n                              You can always change the selected Data Source Name/Table Name in the Data Source configuration page to choose where you   want to read/write the data.","\n  ","\n      ","              2.    Table Data Section","\n                             This section will show the actual table data after expanding the section. It will need to be reloaded after you change the data ","\n                              Source Table from the Data Source Table Details Section.","\n                             After Expanding the Table data Section you will be see the Table Data as below.","\n  ","                       ","\n       ","\n      ","              3.    Table Cell Identifier Section","\n                              Table Cell Identifier section will allow us to point to a particular cell in the Data table where we want to read/write the data. ","\n                              The Configurations options will be different for different Table Types. We will discuss both the configurations below.","\n  ","                        3.1    Table Cell Identifier – Ginger Key Value Table","\n                                             In order to identify the cell where you want to read/write the data, you just need to select the Key Name from Key Name                      Combo list in the Table Cell Identifier Section.","\n                                             ","\n  ","\n                               3.2    Table Cell Identifier – Customized Table","\n                                           There are multiple identifiers available to identify the cell from customized Table. ","\n                                            •    By Selected Cell- This option will be enabled only after loading the Table data section.","\n                                                  You can just select the cell from the table data section to identify cell.","\n                                             ","\n  ","                                    •    By Query – If you want to identify the cell by writing a query. ","\n                                               There is ready made Operators given to create the query.","\n                                                ","\n  ","                                    •    Customized – You can identify the cell by providing the Column and Row identifier.","\n                                                   o Column – You can choose the name of the column from the Column Drop Down.","\n                                                    o Row – We have 3 options available to specify the row.","\n  ","                                                    1. Row Number – Specify the row number in the row number drop down as shown below.","\n                                                              ","\n  ","                                                   2. Next Available Row – It will select the first row where Ginger_Used Column value is Null. ","\n                                                            Note:- This option will be shown only in customized table having GINGER_USED column.","\n                                                                ","\n  ","\n                                                         3.    Where – You can provide the condition to identify the row from the Table.","\n                                                                  ","\n  ","                           3.3  Mark Row As Done ","\n                                           You can check this check box if you want to update the GINGER_USED column as “Done” after read/writing data from the Table Cell. ","\n                                           Note: - This option will be shown only in customized table having GINGER_USED column.","\n  ","                                       ","\n  ","                         ","\n  ","                 4.     Value Expression","\n                                 This section is read only Auto Populated section. It will show the Value expression which is getting generated by selecting the  different options to identify the cell. ","\n  ","                           The Value Expression created will be using below keywords:","\n                                     •    DS Name – Name of the Data Source","\n                                     •    DST – Name of the Data Source Table","\n                                     •    KEY – Key Name from the Ginger KEY Name Table","\n                                     •    MASD – Y/N, if you want to mark row as Done/Not.","\n                                     •    IDEN – Identifier","\n                                          o    Query – Identify by Query","\n                                          o    Cust – If you identifier is Customized","\n                                    •    QUERY – The query by which cell will be executed to get the Table Cell.","\n                                    •    ICOLVAL – The Value of the column Name for Customized Identifier.","\n                                    •    IROW – Row Identifier.","\n                                         o    RowNum – To identify Row by Row Number","\n                                         o    NxtAvail – To get Next Available Row","\n                                         o    Where – To get Row with the Condition","\n                                   •    ROWNUM – Value of the Row Number.  ","\n                                   •    WCOLVAL – Value of Column in where clause.","\n                                   •    WOPR – Operation for where Column value.","\n                                   •    WROWVAL – Value of the column cell in where clause.","\n  ","\n\n"],"2":["Data Source Action"],"id":"106"})