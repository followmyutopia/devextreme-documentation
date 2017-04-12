<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\editorPrepared.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [editorPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPrepared) event.
<!--/shortDescription-->

<!--fullDescription-->
Many grid elements are constructed on editors. For example, the [search panel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel) is constructed on a text box, the [selection column](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Selection_Column) is built on check boxes in full, etc. Obviously, editors are also used to edit a cell or a row in a grid. When default editors provided by **DataGrid** do not meet your requirements, you can customize them by changing their settings within the **onEditorPrepared** function. This function will be called after an editor is created.

When implementing this function, use the object passed to it as its argument. Among the fields of this object, you can find the options of the created editor. These options differ depending on the parent element of the editor. To identify the parent element, check the **parentType** field of the function's argument.

When the **parentType** is *'dataRow'* or *'headerRow'*, you can use the options described in the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) reference section.

[note]If you have specified the [editCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate) option, the **onEditorPrepared** function will *not* be executed when a row or a cell switches into the editing state.
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
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
<!--typeFunctionParamName1_field4-->parentType<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Identifies the type of the editor's parent element. Equals <i>'dataRow'</i>, <i>'filterRow'</i>, <i>'headerRow'</i> or <i>'searchPanel'</i>. Depending on the value of this field, different options are passed to the <b>onEditorPrepared</b> handling function.
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
Specifies the delay between the moment a user stops entering a filter value in the <a href="/Documentation/17_1/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row">filter row</a> or <a href="/Documentation/17_1/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel">search panel</a> and the moment this value is applied.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->width<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The width of the editor; equals <i>null</i> for editors of all parent types except for the <i>'searchPanel'</i>.
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
<!--typeFunctionParamName1_field11-->editorElement<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->jQuery<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Provides access to <a href="http://api.jquery.com/?s=element">element-related jQuery operations</a>.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->readOnly<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Identifies whether or not the editor responds to user actions.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->dataField<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->string<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The name of the field providing data for the <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">column</a> that the editor belongs to.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->row<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->dxDataGridRowObject<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
The properties of the row that the editor belongs to.
<!--/typeFunctionParamDescription1_field14-->
