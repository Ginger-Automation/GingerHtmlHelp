rh._.exports({"0":["AutoSave and Recover "],"1":["\n  ","\n  ","Purpose","\n      The user is working on Ginger for long hours and because of some unavoidable conditions Ginger crashes.","\n      Hence we are providing the AutoSave and Recover mechanism to save users recent work and give them an option of Recover their work.","\n  ","1.     How does Autosave work?","\n  ","        1)    When user will start working in Ginger, (on the start of an application), AutoSave mechanism will be triggered. ","\n              2)    After interval of 5 minutes every Business flow and Runset which you have worked on will be saved in the AutoSave folder. This will be created at the run time in ","\n                  your Solution folder path. ","\n              3)    Runset / Business flow will be created/saved in the AutoSave folder as exactly same folder structure of the original one.","\n              4)    Once any Business flow/ Runset has been saved, it will be removed from AutoSave folder. ","\n              5)    Only items which are unsaved and worked on will be saved in AutoSave folder. ","\n              6)    If you are closing Ginger manually then all the contents of  the AutoSave folder will be cleared. ","\n              7)    Right now we are only storing Businessflow and Runset files in the AutoSave folder. ","\n              8)    The support for storing other files like Environment, Agents etc. will be supported soon. In the coming Releases.","\n  ","      Location of AutoSave folder : ","\n  ","      ","\n  ","      Files which are being saved by AutoSave mechanism is as below:","\n  ","      ","\n  ","\n      ","2.    How does Recover work?","\n  ","       1)    If Ginger has been closed abruptly or has been crashed last time, then all the files from AutoSave folders will be moved to Recover folder. ","\n            2)    Recover folder will be created at the Solution folder path. ","\n            3)    As soon as you will reopen Ginger, if there are any files in the Recover folder then a message will be shown on the UI with all the files listed inside it. ","\n                  ","           ","\n  ","\n            4)    You can View details of each files, on clicking on View Details Button or on Double click event of a particular item.","\n                  ","\n  "," ","\n  ","    2.1    Delete Items ","\n                   If the items/ work is not needed, you can delete it by clicking on the Delete Recovered Items button. ","\n  ","            ","\n  "," ","\n  ","    2.2    Recover Items ","\n  ","            You can also recover the items which needs to be recovered by clicking on Recover Selected button. ","\n  ","            ","\n  "," ","\n  ","            After deleting or recovering the items will be permanently removed from the list and the Recover folder. ","\n\n"],"2":["AutoSave and Recover"],"id":"71"})