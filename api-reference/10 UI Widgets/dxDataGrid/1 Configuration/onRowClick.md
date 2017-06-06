<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\rowClick.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e) | string<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [rowClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowClick) event.
<!--/shortDescription-->

<!--fullDescription-->
The **rowClick** event fires when a user clicks a [grid row](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows). When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked row.

Alternatively, you can navigate to a specific URL when the **rowClick** event fires. For this purpose, assign this URL to the **onRowClick** option.

[note]If there are any internal grid handlers for the row click, the **rowClick** event fires only after these handlers are executed. In this case, the **handled** field of the handler function parameter is set to *true*.

In addition, you can perform certain actions when a user clicks a cell. For this purpose, handle the [cellClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellClick) event. Note that the **cellClick** fires before the **rowClick**.

[note] When the clicked row is in the editing state, or switches to the editing state, the **rowClick** event will not fire. Instead, you can use the **cellClick**.
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
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery-event object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The object of the data source represented by the clicked row.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The key value of the clicked row.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->values<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->array<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Values of the clicked row as they exist in the data source.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->columns<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->array<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Grid columns. Each column in this array is represented by an object with column settings. The order of columns in this array and columns in the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">columns</a> array coincides.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The <i>visible</i> index of the clicked row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group rows</a> are also counted and thus have row indexes. For further information about row indexes, see the <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">Grid Rows</a> topic.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rowType<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->string<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The type of the clicked row. This field equals <i>'data'</i> for <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows">ordinary rows</a>, <i>'group'</i> for <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group rows</a> or <i>'detail'</i> for <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/">detail sections</a>. Use this field to distinguish rows by type.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->isSelected<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the clicked row is <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Selection/">selected</a>.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->isExpanded<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether or not the <a href="/Documentation/17_2/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows">group row</a> is expanded. This field is useful if the <b>rowType</b> field is <i>'group'</i>.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->groupIndex<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->number<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex">group index</a> of the clicked row. This field is useful if the <b>rowType</b> field is <i>'group'</i>.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->rowElement<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->jQuery<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The clicked row; provides access to <a href="http://api.jquery.com/?s=element">element-related jQuery operations</a>.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->handled<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->boolean<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
Indicates if the grid has already handled the row click event.
<!--/typeFunctionParamDescription1_field15-->
