===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when the hover state of a cell is changed. 
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onCellHoverChanged](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellHoverChanged) option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the cell whose hover state has been changed. For example, to identify whether a cell has been hovered over or hovered out, check the value of the **eventType** field.

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
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
<!--typeFunctionParamName1_field4-->eventType<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->String<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Indicates whether the pointer entered or left the cell. Can be either *'mouseover'* or *'mouseout'*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The data of the row to which the cell belongs.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The row's key. If a field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->value<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The cell's raw value.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->text<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->String<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The cell's [formatted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format) value converted to a string.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->displayValue<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The cell's displayed value. Differs from the **value** field only when the column to which the current cell belongs uses [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/).
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->columnIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The index of the column to which the cell belongs. For details on indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowIndex<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Number<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The row's visible index. For details on indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->column<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->dxDataGridColumn<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->rowType<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->String<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The row's type. This field equals *'data'* for data rows or *'group'* for group rows. 
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->cellElement<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->dxElement<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->row<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->dxDataGridRowObject<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
The row [properties](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/). 
<!--/typeFunctionParamDescription1_field15-->
