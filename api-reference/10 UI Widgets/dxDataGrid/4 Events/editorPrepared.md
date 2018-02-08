===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after an editor is created.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onEditorPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPrepared) option to handle the event.

Many grid elements are constructed on editors. For example, the [search panel](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Search_Panel) is constructed on a text box, the [selection column](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/) is built on check boxes in full, etc. Obviously, editors are also used to edit cells or rows in a grid. When default editors provided by **DataGrid** do not meet your requirements, you can customize them by changing their settings within the **editorPrepared** event handler. This handler will be called after an editor is created.

When implementing the handler, use the object passed to it as its argument. Among the fields of this object, you can find the options of the created editor. These options differ depending on the parent element of the editor. To identify the parent element, check the **parentType** field of the handler's argument.

When the **parentType** is *'dataRow'* or *'headerRow'*, you can use the options described in the [column's](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) reference section.

[note]If you have specified the [editCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate) option, the **editorPrepared** event will not fire when a row or a cell switches into the editing state.

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
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
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->parentType<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.      
Options passed to the handler depend on this value.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->value<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The editor's value.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->setValue(newValue)<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
A method that you need to call to change the cell value after the editor's value is changed.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->updateValueTimeout<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->width<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The editor's width; equals **null** for editors of all parent types except for the *'searchPanel'*. 
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->disabled<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Indicates whether the editor is disabled.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rtlEnabled<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->boolean<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Indicates whether the editor uses a right-to-left representation.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->editorElement<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->dxElement<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->readOnly<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Indicates whether the editor is read-only.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->dataField<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->string<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The name of the field that provides data for the column to which the editor belongs.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->row<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->dxDataGridRowObject<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The [properties](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/) of the row to which the editor belongs.
<!--/typeFunctionParamDescription1_field14-->
