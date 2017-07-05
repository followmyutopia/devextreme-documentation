<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires before an editor is created.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onEditorPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing) option to handle the event.

Many grid elements are constructed on editors. For example, the [search panel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel) is constructed on a text box, the [selection column](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Selection_Column) is built on check boxes in full, etc. Obviously, editors are also used to edit a cell or a row in a grid. When default editors provided by **DataGrid** do not meet your requirements, implement a custom editor. For this purpose, attach a handling function to the **editorPreparing** event. This function accepts an object as the parameter. Assign **true** to the **cancel** field of this object. After that, implement your editor using the other fields of this object.

You can distinguish editors by their parent element. Also, the parent element defines data passed to the **editorPreparing** handler. To identify the parent element, check the **parentType** field of the handler's argument.

When the **parentType** is *'dataRow'* or *'headerRow'*, you can use the options described in the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) reference section.

[note]If you have specified the [editCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate) option, the **editorPrepared** event will not fire when a row or a cell switches into the editing state.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
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
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->parentType<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Identifies the type of the editor's parent element. Equals *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*. Depending on the value of this field, different options are passed to the **editorPreparing** handler.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->value<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The current value of the editor.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->setValue(newValue)<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
A method that should be called to change the cell value when the editor value is changed.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->updateValueTimeout<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Specifies the delay between the moment a user stops entering a filter value in the [filter row](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row) or [search panel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel) and the moment this value applies.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->width<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The width of the editor; equals **null** for editors of all parent types except for the *'searchPanel'*.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->disabled<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Identifies whether or not the editor is disabled.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rtlEnabled<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->boolean<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Identifies whether or not the editor uses a right-to-left representation.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->cancel<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
A flag allowing you to cancel the creation of the editor. Set it to **true** and implement a custom editor if your scenario requires it.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->editorElement<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->jQuery<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Provides access to [element-related jQuery operations](http://api.jquery.com/?s=element).
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->readOnly<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->boolean<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
Identifies whether or not the editor responds to user actions.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->editorName<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->string<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The name of the editor widget.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->editorOptions<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->object<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
An object with configuration options for the editor widget.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->dataField<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->string<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
The name of the field providing data for the [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) that the editor belongs to.
<!--/typeFunctionParamDescription1_field16-->
<!--typeFunctionParamName1_field17-->row<!--/typeFunctionParamName1_field17-->
<!--typeFunctionParamType1_field17-->dxDataGridRowObject<!--/typeFunctionParamType1_field17-->
<!--typeFunctionParamDescription1_field17-->
The properties of the row that the editor belongs to.
<!--/typeFunctionParamDescription1_field17-->
