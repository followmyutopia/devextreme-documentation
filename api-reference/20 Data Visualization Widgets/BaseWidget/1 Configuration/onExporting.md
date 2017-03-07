<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Function is called before exporting data<!--/d-->
<!--EventForAction-->..\4 Events\exporting.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
<!--fp1d-->Information about export.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->File name of exproting file<!--/fp1_field4d-->
<!--fp1_field5d-->Cancel exporting<!--/fp1_field5d-->
===========================================================================

<!--shortDescription-->
A handler for the [exporting]({basewidgetpath}/Events#exporting) event.
<!--/shortDescription-->

<!--fullDescription-->
To perform a custom action before data from the widget is exported, assign a function to this option. Within this function, you can use the object passed to it as the parameter. For example, using the **cancel** field of this object, you can cancel exporting.

#####See Also#####
- [export]({basewidgetpath}/Configuration/export) - configures client-side export and printing.
- [onExported]({basewidgetpath}/Configuration#onExported) - allows you to notify an end user when exporting is completed.
- [onFileSaving]({basewidgetpath}/Configuration#onFileSaving) - allows you to access exported data and/or prevent it from being saved into a file on the user's local storage.
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
<!--typeFunctionParamName1_field4-->fileName<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The name of the file to which the widget is about to be exported.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cancel<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->boolean<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Assign <i>true</i> to this field if you need to prevent exporting.
<!--/typeFunctionParamDescription1_field5-->
