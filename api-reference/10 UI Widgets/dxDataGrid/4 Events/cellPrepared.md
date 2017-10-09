<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->event<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after a cell has been rendered.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onCellPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared) option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared cell.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget [instance](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance).
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
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The object of a data source represented by the row to which the prepared cell belongs.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The key of the row. If a field providing keys is not specified in a [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->value<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The value of the prepared cell as it is specified in the data source.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->displayValue<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->string<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The value displayed by the prepared cell. Differs from the **value** field only when the column to which the prepared cell belongs uses [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/).
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->text<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->string<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The value of the prepared cell in a string format. Use this field to get the value with applied [format](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format).
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->columnIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The index of the column to which the prepared cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->column<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->object<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The [settings of the column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) to which the prepared cell belongs.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowIndex<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->number<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The index of the row to which the prepared cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows and thus have row indexes. For further information about row indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->rowType<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->string<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The type of the row to which the prepared cell belongs. This field can be set to one of the following values: *"data"*, *"detail"*, *"group"*, *"groupFooter"*, *"header"*, *"filter"* or *"totalFooter"*. Use this field to distinguish rows by type.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->row<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->dxDataGridRowObject<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The settings of the row to which the cell belongs.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->isSelected<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->boolean<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Indicates whether or not the current row is selected.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->isExpanded<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->boolean<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
Indicates whether or not the group cell is expanded. This field is useful if the **rowType** field is *'group'*.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->cellElement<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->jQuery<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
The element of the prepared cell.
<!--/typeFunctionParamDescription1_field16-->
