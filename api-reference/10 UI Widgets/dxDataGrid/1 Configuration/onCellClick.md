<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\cellClick.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [cellClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellClick) event.
<!--/shortDescription-->

<!--fullDescription-->
The **cellClick** event fires when a user clicks a grid cell. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.

Alternatively, you can navigate to a specific URL when the **cellClick** event fires. For this purpose, assign this URL to the **onCellClick** option.

In addition, you can perform some actions when a user clicks a row. For this purpose, handle the [rowClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowClick) event.

[note]**cellClick** fires before **rowClick**.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The [widget's instance](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Element<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
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
The key of the row. If a field providing keys is not specified in a [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->value<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The value of the clicked cell as it is specified in a data source.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->displayValue<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->string<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The value displayed by the clicked cell. Differs from the **value** field only when the column to which the clicked cell belongs uses [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/).
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->text<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The value of the clicked cell in a string format. Use this field to get the value with applied [format](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format).
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->columnIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The current index of the column to which the clicked cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->column<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->object<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The [settings of the column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) to which the clicked cell belongs.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowIndex<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->number<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The *visible* index of the row to which the clicked cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows and, thus, have row indexes. For further information about row indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowType<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->string<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The type of the row to which the clicked cell belongs. This field equals *'data'* for data rows or *'group'* for group rows. Use this field to distinguish rows by type.
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
