<!--id-->dxTreeList.Options.onFocusedCellChanged<!--/id-->
<!--EventForAction-->..\4 Events\focusedCellChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after the focused cell changes. 
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [focusedRowIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowIndex) | [focusedRowKey](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowKey)
- [focusedColumnIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedColumnIndex)
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
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->cellElement<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxElement<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The focused cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->columnIndex<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The index of the cell's column.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->rowIndex<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Number<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The index of the cell's row.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->row<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->dxTreeListRowObject<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The row's properties.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->column<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->dxTreeListColumn<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The column's properties.
<!--/typeFunctionParamDescription1_field8-->
