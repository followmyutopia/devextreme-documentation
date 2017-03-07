<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\rowPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [rowPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowPrepared) event.
<!--/shortDescription-->

<!--fullDescription-->
The **rowPrepared** event fires after a row has been rendered. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared row.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The object of a data source represented by the prepared row. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->values<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Values of the current row as they exist in the data source.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->columns<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->array<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Grid columns. Each column in this array is represented by an object with column settings. The order of columns in this array and columns in the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">columns</a> array coincides.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->rowIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The <i>visible</i> index of the prepared row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group cells</a> are also counted as rows and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowType<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The type of the prepared row. This field can be set to one of the following values: <i>"data"</i>, <i>"detail"</i>, <i>"group"</i>, <i>"groupFooter"</i>, <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>. Use this field to distinguish rows by type.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->groupIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex">group index</a> of the current row. This field is useful if the <b>rowType</b> field is <i>'group'</i>.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->isSelected<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the prepared row is <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Selection/">selected</a>. This field is useful if the <b>rowType</b> field is set to <i>"data"</i>
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->isExpanded<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the prepared row is expanded. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowElement<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->jQuery<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The element of the hovered row.
<!--/typeFunctionParamDescription1_field13-->
