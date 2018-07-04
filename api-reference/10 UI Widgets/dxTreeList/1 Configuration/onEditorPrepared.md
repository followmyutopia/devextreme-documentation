<!--EventForAction-->..\4 Events\editorPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after an editor is created.
<!--/shortDescription-->

<!--fullDescription-->
Numerous **TreeList** elements are based on editors: the [search panel](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Search_Panel) is a text box, the [filter row](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Row) uses text boxes, calendars, and select boxes, and so on. This function allows you to add custom CSS classes to those default editors. To change their configuration or substitute them for other editors, use the [onEditorPreparing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditorPreparing) function.

[note] This function is not executed for cells that use the [editCellTemplate](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate).
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
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
<!--typeFunctionParamName1_field4-->parentType<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->String<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->value<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The editor's value.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->setValue(newValue, newText)<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->updateValueTimeout<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->width<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->disabled<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Indicates whether the editor is disabled.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rtlEnabled<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Boolean<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Indicates whether the editor uses right-to-left representation.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->editorElement<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->dxElement<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->readOnly<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the editor is read-only.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->dataField<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->String<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The name of the field that provides data for the column the editor belongs to.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->row<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->dxTreeListRowObject<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The [properties](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/) of the row the editor belongs to.
<!--/typeFunctionParamDescription1_field14-->
