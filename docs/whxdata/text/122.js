rh._.exports({"0":["Understanding Action Conversions"],"1":["\n  ","\n  ","\n  ","Purpose","\n  ","The purpose of adding an Actions Convertor is to allow users to automatically convert their obsolete flows containing redundant actions to new flows, also it provides ability to convert to new actions using the POM objects.","\n  ","In this document, we’ll consider the example of conversion of obsolete ASCF Driver-based flows to Java Driver-based flows. There could be more such scenarios in the future but for simplicity in understanding, we will take the example of conversion of obsolete ASCF flows to Java Driver.","\n      Since ASCF Driver is no longer supported by Ginger and users are highly recommended to switch to Java Driver for automation, the ASCF/GTB Convertor will facilitate the users to automatically convert their obsolete ASCF Driver-based actions to Java Driver-based ones thus, minimizing manual effort to a great extent.","\n  ","Understanding the Actions Convertor ","\n  ","  The Actions Conversion window consists of mainly three sections:","\n  ","   1.    Name of Activities in the Business Flow,","\n         2.    Convertible Action Types and,","\n         3.    Conversion Configurations","\n  ","  ","1.  Name of Activities in the Business Flow","\n             This section lists out all the activities present in the selected Business Flow regardless they are active or inactive.","\n             The user needs to select the activities that he wants to convert from the grid and then, click on the View Convertible Action Types buttons.","\n  "," 2. Convertible Action Types","\n            This section enlists all the types of actions present in the selected activity by the user. The action types are shown in a grid along                ","with their Source Activities, which are the parent activities that contain that specific type of action in the activity.","\n            The users can also view the Count of the action types in the selected activity i.e. number of occurrences of the action types in this              activity along with their parent activities.","\n           Finally, we have the Target Action Type that states the action type of the newly converted actions after the conversion is done.","\n  "," 3. Conversion Configurations","\n           In this section, the users can do the configuration settings for the conversion. The users can choose whether they want to add the               newly converted actions to a New Activity or the Same Activity i.e. the parent activity to which the obsolete action belongs to,                   also it provides the ability to convert to new actions using the POM objects user can select the existing POM object.","\n          The users can also set a default Target Application (TA) for the modified activities by selecting the respective TA from a list of                   available TAs that are present in the selected Business Flow.","\n  ","    In case the flow doesn’t have the required TA (in this case, a Java platform-based) then, the user can simply minimize the Actions               Flow Conversion window and add the required TA to the flow from the Solution tab. Once added successfully, the user can switch             back to the Actions Conversion window and click on the Refresh button ( ) and the newly added TA will be shown in the list of TAs.","\n          The user can choose the TA from the dropdown list and then, click on the Convert button and the newly converted actions will be               added to a new activity or to the same parent activity, depending on the selection made by the user.","\n  ","     NOTE: It’s recommended to add the newly converted actions to a New Activity rather than the Same Activity because the new                   actions will need mapping to a different TA, in this case, a Java Driver-based TA.","\n           Therefore, in a new activity, it is simpler to configure a new TA, in this case, a Java Driver-based TA. Whereas, if we choose to add           new actions to same activity that is already mapped to an ASCF Driver-based TA, this will result in a conflict here. Although the               conflict can be resolved manually by the user, it will be easier for him/her in case of a new activity.","\n  ","     ","\n  ","    ","\n  ","  ","\n  ","   ","\n     ","\n  ","\n       ","  POM Selection window","\n  ","   ","\n  "," ","\n  ","\n     ","\n     ","\n  ","\n     ","\n\n"],"2":["Understanding Actions Conversion"],"id":"122"})