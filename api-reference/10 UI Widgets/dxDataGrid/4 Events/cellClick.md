<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when a user clicks a [grid cell](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Cells).
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onCellClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellClick) option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.

In addition, you can perform some actions when a user clicks a row. For this purpose, handle the [rowClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowClick) event.

[note]**cellClick** fires before **rowClick**.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
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
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery-event object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The object of the data source represented by the row to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->value<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The value of the clicked cell as it is specified in a data source.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->displayValue<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->string<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The value displayed by the clicked cell. Differs from the <b>value</b> field only when the column to which the clicked cell belongs uses <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/">lookup</a>.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->text<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The value of the clicked cell in a string format. Use this field to get the value with applied <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format">format</a>.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->columnIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The current index of the column to which the clicked cell belongs. For more information on how this index is calculated, refer to the <a href="/Documentation/17_1/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index">Calculating the Column Index</a> topic.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->column<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->object<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">settings of the column</a> to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowIndex<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->number<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The index of the row to which the clicked cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/17_1/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group cells</a> are also counted as rows and, thus, have row indexes. For further information about row indexes, see the <a href="/Documentation/17_1/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowType<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->string<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The type of the row to which the clicked cell belongs. This field equals <i>'data'</i> for <a href="/Documentation/17_1/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">ordinary rows</a> or <i>'group'</i> for <a href="/Documentation/17_1/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group rows</a>. Use this field to distinguish rows by type.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->cellElement<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->jQuery<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The element of the clicked cell.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->row<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->dxDataGridRowObject<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
The settings of the row to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field15-->
