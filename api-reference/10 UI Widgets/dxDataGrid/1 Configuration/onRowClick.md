<!--EventForAction-->..\4 Events\rowClick.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a row is clicked or tapped.
<!--/shortDescription-->

<!--fullDescription-->
Prior to this function, the widget executes the [onCellClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellClick) function and sometimes internal functions. You can use the **handled** field to check whether internal functions were executed.

[note] When the clicked row is in the editing state or switches to this state, the **onRowClick** function is not executed. Instead, specify the **onCellClick** function.
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
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->event<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The event that caused the function's execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->data<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The row's data.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->key<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->any<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The row's key.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->values<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Array<any><!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Values displayed in the row cells.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->columns<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Array<Object><!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rowIndex<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Number<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowType<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->String<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType).
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->isSelected<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the row is [selected](/Documentation/Guide/Widgets/DataGrid/Selection/).
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->isExpanded<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->Boolean<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
Indicates whether or not the group row is expanded. Available if **rowType** is *"group"*.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->groupIndex<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->Number<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The row's [group index](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex). Available if **rowType** is *"group"*.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->rowElement<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->dxElement<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
The row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->handled<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->Boolean<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
Indicates whether internal widget functions have already handled the event.
<!--/typeFunctionParamDescription1_field16-->
