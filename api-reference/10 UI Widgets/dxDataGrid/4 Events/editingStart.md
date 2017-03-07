<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Customize before edit row<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->The info about the event.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->The data of the current row.<!--/fp1_field4d-->
<!--fp1_field5d-->The key current row.<!--/fp1_field5d-->
<!--fp1_field6d-->The cancel editing row.<!--/fp1_field6d-->
<!--fp1_field7d-->The options current column.<!--/fp1_field7d-->
===========================================================================

<!--shortDescription-->
Fires before a row (in [row edit mode](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Row_Mode)) or a cell (in [batch edit mode](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode)) switches into the editing state.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onEditingStart](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditingStart) option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its argument. Among the fields of this object, you can find parameters of the about-to-be-edited row.

If you need to prevent a specific row or cell from switching into the editing state, assign *true* to the **cancel** field of the object passed to the handler as the argument.

You can also distinguish rows that exist in the data source from rows that have not yet been transmitted to the data source. For this purpose, use the **key** field of the object with the row parameters. Not-yet-transmitted rows have this field *undefined*.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
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
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data object of the row.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key. If a row has not been transmitted to the data source yet, its key is <i>undefined</i>.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cancel<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->boolean<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
A flag allowing you to prevent the row from switching into the editing state.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->column<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns">options of the column</a> whose cell is switching into the editing state; useful in the <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode">batch edit mode</a>.
<!--/typeFunctionParamDescription1_field7-->
