<!--id-->dxTreeList.Options.editing.allowDeleting<!--/id-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean | function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user can delete rows. It is called for each data row when defined as a function.
<!--/shortDescription-->

<!--fullDescription-->
See an example in the [allowAdding](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowAdding) option.

#####See Also#####
- [onRowRemoved](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowRemoved)
- [onRowRemoving](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowRemoving)
- [deleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deleteRowrowIndex)
- [undeleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#undeleteRowrowIndex)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the current row.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxTreeList<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->row<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxTreeListRowObject<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The row's properties. 
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the row can be deleted; otherwise **false**.
<!--/typeFunctionReturnDescription-->