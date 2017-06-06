<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\cellPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [cellPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellPrepared) event.
<!--/shortDescription-->

<!--fullDescription-->
The **cellPrepared** event fires after a cell has been rendered. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared cell.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridtemplatescellpreparedtemplate/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
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
The object of a data source represented by the row to which the prepared cell belongs. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key. This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->value<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The value of the prepared cell as it is specified in the data source.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->displayValue<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->string<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The value displayed by the prepared cell. Differs from the <b>value</b> field only when the column to which the prepared cell belongs uses <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/">lookup</a>.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->text<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->string<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The value of the current cell in a string format. Use this field to get the value with applied <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format">format</a>.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->columnIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The index of the column to which the prepared cell belongs. For more information on how this index is calculated, refer to the <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index">Calculating the Column Index</a> topic.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->column<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->object<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">settings of the column</a> to which the prepared cell belongs.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowIndex<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->number<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The <i>visible</i> index of the clicked row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group rows</a> are also counted and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowType<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->string<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The type of the row to which the prepared cell belongs. This field can be set to one of the following values: <i>"data"</i>, <i>"detail"</i>, <i>"group"</i>, <i>"groupFooter"</i>, <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>. Use this field to distinguish rows by type.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->row<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->dxDataGridRowObject<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The settings of the row to which the cell belongs.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->isSelected<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->boolean<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Indicates whether the prepared row is selected. This field is useful if the <b>rowType</b> field is set to <i>"data"</i>
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->isExpanded<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->boolean<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
Indicates whether or not the <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group cell</a> is expanded.  This field is unavailable if the <b>rowType</b> field is set to <i>"header"</i>, <i>"filter"</i> or <i>"totalFooter"</i>.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->cellElement<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->jQuery<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
The element of the prepared cell.
<!--/typeFunctionParamDescription1_field16-->
