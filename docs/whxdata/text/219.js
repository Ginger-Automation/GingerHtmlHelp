rh._.exports({"0":["Import ALM Test Set to Ginger"],"1":["\n  ","\n  ","\n  ","\n  ","Ginger supports importing ALM Test Set which was created manually in ALM or automatically by the Design Console (ATS) application and converting it into Ginger Test Set. This can be then used to automate or execute (assuming automation was already created for the Test Cases).","\n  ","For performing ALM Test Set import please follow below steps:","\n  ","1. Open Ginger Solution tab which loaded with your Ginger Solution","\n        2. Right click on the Test Sets folder tree node and select “Import” ->“Import ALM Test Set”","\n             Ginger will use the current ALM Settings that have been saved in step 3 (Connecting Ginger to ALM Project) and try to import using saved ALM settings.","\n        3. According to ALM type, Window with the connected ALM project Test Lab tree, or in a list for RQM ALM, will be loaded, select the ALM Test Set you want to ","import.","\n        4. For QC ALM - After clicking on the ALM Test Set the window right panel will show:","\n            a. How many ALM TC’s exists in the selected ALM Test Set","\n            b. The execution status of the ALM Test Set TC’s","\n            c. Indication if the ALM Test Set was already imported in the current Solution and if yes then to which Ginger Test Set it mapped","\n            d. Click on “Import Selected”","\n        5. For RQM ALM – A list of RQM Test Plans will be shown, Click on the right column button “Import Test” for the line of the test you want to import,","\n            Then Select Test script from Combo box for that Test Plan you chosen to import and click on “Import”.","\n        6. The ALM Test Set will be imported and converted into a Ginger Test Set with the same name under the Ginger Test Sets folder you selected to import to in ","step 2 ","\n  ","        ","\n            ","\n  "," ","\n  ","QC ALM Select Test Set to Import Window:","\n  ","\n  ","\n      ","Note: ","(In QC ALM) User is able to import all ALM Test Set’s which placed in a specific ALM Test Lab folder by selecting the folder name and clicking on “Import Selected”","\n  "," ","\n  ","RQM ALM Select Test Plan to Import Window:","\n  ","\n  ","\n  ","\n      ","By selecting the imported Ginger Test Set you will be able to see that for all of the ALM Test Set TC’s a matching Ginger Test Cases were created, for viewing them click on the “Test Cases Manager”  icon which placed in the Ginger Test Set Steps grid","\n  ","\n  "," ","\n  ","\n      ","All of the ALM Test Set TC’s Steps will be shown in the Ginger Test Set Steps ready to be automated or execute.","\n  ","\n  "," ","\n  "," ","\n  ","For each ALM TC Step Parameter a matching Ginger Parameter from type Selection List will be created under the matching Ginger Step and the Parameter selected value will be added to the optional list of values.","\n  ","\n        ","Note:"," In case some of the ALM TC’s were imported before, automated and added to the Solution Shared repository, they will automatically be pulled from the Repository and reused in the imported Ginger Test Set","\n  ","\n  ","\n\n"],"2":["Import ALM Test Set to Ginger"],"id":"219"})