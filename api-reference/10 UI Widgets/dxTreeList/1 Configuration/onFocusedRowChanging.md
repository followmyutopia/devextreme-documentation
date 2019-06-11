<!--id-->dxTreeList.Options.onFocusedRowChanging<!--/id-->
<!--EventForAction-->..\4 Events\focusedRowChanging.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before the focused row changes. Applies only when [focusedRowEnabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowEnabled) is **true**.
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
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->rowElement<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxElement<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
#include common-ref-elementparam with { element: "to-be-focused row" }
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->prevRowIndex<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The index of the previously focused row.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->newRowIndex<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Number<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The index of the row to be focused.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->event<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->event<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
#include common-ref-eventparam
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->rows<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Array<dxTreeListRowObject><!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The visible rows' properties.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->cancel<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Allows you to cancel focusing a new row.
<!--/typeFunctionParamDescription1_field9-->
