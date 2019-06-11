<!--id-->dxDataGrid.Options.editing.allowUpdating<!--/id-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean | function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user can update rows. It is called for each data row when defined as a function.
<!--/shortDescription-->

<!--fullDescription-->
See an example in the [allowDeleting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting) option.

#####See Also#####
- [onRowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdating)
- [onRowUpdated](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdated)
- [cellValue(rowIndex, visibleColumnIndex, value)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex_value)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the current row.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxDataGrid<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->row<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxDataGridRowObject<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The row's properties. 
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the row can be updated; otherwise **false**.
<!--/typeFunctionReturnDescription-->