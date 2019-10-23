rh._.exports({"0":["Find and Replace"],"1":["\n  ","\n  ","Purpose","\n      The purpose is to find and replace fields among the Ginger entities such as actions, API Models, Variables etc.","\n  ","\n      ","1.     Find items","\n  ","        Go to the Business Flow tab and double click on the desired Business Flow. Find and Replace button is displayed as shown below.  ","\n               ","\n  ","      1.1    How to Find Items?","\n                     a.    Step one will be to select the Item Type user want to find. ","\n                     b.    Once selected, Sub Item Type will be visible. In case the selected ‘Item Type’ has sub item then by default all ‘Sub Items                              Type’ will be included in the search. User has to select the ‘Sub Item’ to narrow the search scope.","\n  ","                        ","\n  ","                       ","\n  ","\n                     c.    Populate the ‘Find What’ field with the field value you want to search.","\n                            If user wants to include case sensitive in the search then check the ‘Match Case’ checkbox.","\n                            If user wants to find values which are equal to the whole field value check the ‘Match whole word’ check box.","\n                            ","\n  ","                d.    Click the find button","\n                             ","\n  ","      1.2    Found Items Grid","\n  ","               a.    Grid column dictionary:","\n                            •    Item Type – Ginger Entity Type","\n                            •    Item Name – Entity Name (Action Name, Activity Name etc.)","\n                            •    Item Path – Relative path from solution directory","\n                            •    Item Parent – Parents Path from the Item Path (relative solution directory)","\n                            •    Found Field – The actual field name – in case it’s a field inside field it will appear as path for example                                                              IntptValues/EndPointURL/Value (The user will understand the EndPoint URL, it is shown like this because the way we                                  are saving it on our backend) please try to find the field inside the path in our example ‘EndPointURL’","\n                            •    Field value -  The actual field value","\n                                    ","\n       ","\n                             •    Double Click on the row or regular click on the View Details will open the Item edit page which should can also change                                the value from there and save. ","\n  ","2.    Replace","\n  ","        Only after the finding process is finished, we can run replace process.","\n               In order to see replace configuration please check the Replace Radio Button.","\n  ","         ","\n  ","\n             2.1    Replace Items ","\n                      Once selecting the Replace Radio button, Replace configuration will be appear, Replace text box Replace Selected Button","\n                      Note: – Value can be replaced only if it selected and its status is Pending Replace or Replace Failed.","\n  ","                   ","\n  ","\n                       Also after selecting the Replace Radio Button 2 new column will be added to the grid Selected and Status.","\n  ","                 ","\n  ","\n                      2.1.1    Replace With the Right Value","\n                                  In some cases Replace will be possible only with the right value:","\n                                  a)    Value which been selected from a list of already defined values cannot be replace with just any text","\n                                  b)    Boolean Value – true or false which generally reflect the checkbox ‘Is checked’ property","\n                                        To overcome this obstacle we forced the Replace text box to be changed to dropdown list with defined values                                                   whenever you will select a row from the Find Result grid which meets the above cases.","\n  ","                                Please note –","If you need to replace value like describe above make sure to select only rows with the same field so you                                 don’t replace all the find value but only the once which selected from this list, The selected check box will be by default unselected.","\n                                      ","\n  ","                 2.1.2    Replace States","\n                                   In order to understand the Replace states please refer to the below table","\n  ","                             ","\n  ","\n    ","\n      ","\n        ","\n          ","MatchCase","\n        ","\n        ","\n          ","MatchAllWord","\n        ","\n        ","\n          ","Find What","\n        ","\n        ","\n          ","Replace","\n        ","\n        ","\n          ","Value before replac","\n        ","\n        ","\n          ","Value After replace ","\n        ","\n        ","\n          ","Description","\n        ","\n      ","\n      ","\n        ","\n          ","X","\n        ","\n        ","\n          ","X","\n        ","\n        ","\n          ","o","\n        ","\n        ","\n          ","GINGER","\n        ","\n        ","\n          ","Hell","o"," W","o","rld","\n        ","\n        ","\n          ","Hell","GINGER"," W","GINGER","rld","\n        ","\n        ","\n          ","Only the Value O replaced with the new value to replace","\n        ","\n      ","\n      ","\n        ","\n          ","V","\n        ","\n        ","\n          ","X","\n        ","\n        ","\n          ","o","\n        ","\n        ","\n          ","GINGER","\n        ","\n        ","\n          ","HellO W","o","rld","\n        ","\n        ","\n          ","HellO W","GINGER","rld","\n        ","\n        ","\n          ","only thelower o has been changed because we included case sensitive by checking the match case","\n        ","\n      ","\n      ","\n        ","\n          ","X","\n        ","\n        ","\n          ","V","\n        ","\n        ","\n          ","Hello World","\n        ","\n        ","\n          ","GINGER","\n        ","\n        ","\n          ","HELLO WORLD","\n        ","\n        ","\n          ","GINGER","\n        ","\n        ","\n          ","The complete value has been changed to the new value","\n        ","\n      ","\n      ","\n        ","\n          ","V","\n        ","\n        ","\n          ","V","\n        ","\n        ","\n          ","Hello World","\n        ","\n        ","\n          ","GINGER","\n        ","\n        ","\n          ","Hello World","\n        ","\n        ","\n          ","GINGER","\n        ","\n        ","\n          ","The complete has been changed to the new value","\n        ","\n      ","\n    ","\n  ","\n  ","\n  ","\n      ","3.    Save","\n              After the replace process, Save Selected button will be appeared, clicking on it will save all the selected replaced file.","\n              ","Note: – file can be saved only if it selected and its status is Replaced or Save Failed.","\n  ","        ","\n\n"],"2":["Find and Replace"],"id":"65"})