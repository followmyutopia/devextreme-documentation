<!--id-->dxDataGrid.Options.onExported<!--/id-->
<!--EventForAction-->dxDataGrid.exported<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after data is exported.
<!--/shortDescription-->

<!--fullDescription-->
You can use this function with the [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) function to adjust columns before exporting. See an example in the **onExporting** description.

#####See Also#####
- [Client-Side Exporting](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/)
- [customizeExportData](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData)
- [onFileSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
