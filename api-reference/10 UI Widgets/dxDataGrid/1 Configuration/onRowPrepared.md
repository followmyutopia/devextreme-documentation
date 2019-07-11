<!--id-->dxDataGrid.Options.onRowPrepared<!--/id-->
<!--EventForAction-->dxDataGrid.rowPrepared<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after a row is created.
<!--/shortDescription-->

<!--fullDescription-->

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
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The row's raw data. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The row's key.     
If a field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key. 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->values<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Array<any><!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Values displayed in the row cells.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->columns<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Array<dxDataGridColumn><!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->rowIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowType<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType).
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->groupIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The row's [group index](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex). Available if **rowType** is *"group"*.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->isSelected<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the prepared row is [selected](/Documentation/Guide/Widgets/DataGrid/Selection/). Available only if **rowType** is *"data"*.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->isExpanded<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowElement<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->dxElement<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
#include common-ref-elementparam with { element: "row" }
<!--/typeFunctionParamDescription1_field13-->
