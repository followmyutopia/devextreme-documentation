<!--id-->dxTreeList.Options.onRowDblClick<!--/id-->
<!--EventForAction-->dxTreeList.rowDblClick<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a row is double-clicked or double-tapped. Executed after [onCellDblClick](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellDblClick).
<!--/shortDescription-->

<!--fullDescription-->
[note] **onRowDblClick** is not executed when the clicked row is in the editing state or switches to this state. You can use **onCellDblClick** instead.
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
<!--typeFunctionParamName1_field4-->event<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
#include common-ref-eventparam
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row's data.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The row's [key](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#key). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.  
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->values<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Array<any><!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Raw values displayed in the row's cells.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->columns<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Array<dxTreeListColumn><!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The configurations of visible columns.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rowType<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->String<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->isSelected<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->isExpanded<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowElement<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->dxElement<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
#include common-ref-elementparam with { element: "row" }
<!--/typeFunctionParamDescription1_field13-->
