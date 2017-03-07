<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Function is called when data is exported<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->Information about export.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
===========================================================================

<!--shortDescription-->
Fires after data from the widget is exported.
<!--/shortDescription-->

<!--fullDescription-->
To perform a custom action after data from the widget is exported, implement a handler for this event. For example, this handler can notify the user that the exporting has been completed. Within this handler, you can use the object passed to it as the parameter.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events)
- [export]({basewidgetpath}/Configuration/export) - configures client-side export and printing.
- [exporting]({basewidgetpath}/Events#exporting) - an event that fires before data from the widget is exported.
- [fileSaving]({basewidgetpath}/Events#fileSaving) - an event that fires before a file with exported data is saved on the user's local storage.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="{basewidgetpath}/Methods/#instance"></a> instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in Knockout and AngularJS approaches.
<!--/typeFunctionParamDescription1_field3-->
