<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires before a row is updated in a data source.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onRowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdating) option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its argument. This object contains information about the event. Among the fields of this object, you can find the **cancel** flag that allows you to prevent the row from being updated. In order to accomplish that, set this flag to *true*. The behavior of the rows, whose updating was canceled, depends on the [edit mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode). In [row mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Row_Mode), such a row does not switch back to the normal state. In [batch mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode), changes in such rows stay buffered. If you need to perform an asynchronous action before saving the updated row, assign a **jQuery.Promise** object to the **cancel** field. The row will be actually updated when the **jQuery.Promise** object is resolved.

[note] In batch edit mode, when several rows are to be updated, the **onRowUpdating** function will be executed for each row individually.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/)
- [Handle Events - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/)
- [Handle Events - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
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
<!--typeFunctionParamName1_field4-->oldData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Row's old data.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->newData<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Row's updated data.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->key<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cancel<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->boolean|Promise<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
A flag allowing you to prevent the row from being updated.
<!--/typeFunctionParamDescription1_field7-->
