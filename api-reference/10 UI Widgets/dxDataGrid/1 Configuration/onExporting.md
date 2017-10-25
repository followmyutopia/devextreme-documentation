<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\exporting.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [exporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exporting) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action before exporting grid data.

#####See Also#####
- [Client-Side Exporting - Events](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#Events)
- [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/) - configures client-side exporting.
- [customizeExportData](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData) - customizes grid columns and data before exporting.
- [onExported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported) - allows you to notify an end user when exporting is completed.
- [onFileSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving) - allows you to access exported data and/or prevent it from being saved into a file on the user's local storage.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget [instance](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->fileName<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The name of the file to which grid data is about to be exported.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cancel<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->boolean<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Indicates whether or not to cancel exporting.
<!--/typeFunctionParamDescription1_field5-->
