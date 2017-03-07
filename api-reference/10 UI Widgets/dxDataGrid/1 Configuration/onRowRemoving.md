<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\rowRemoving.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [rowRemoving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowRemoving) event.
<!--/shortDescription-->

<!--fullDescription-->
The **rowRemoving** event fires before a row is removed from a data source. To handle this event, implement a function and assign it to the **onRowRemoving** option. Using the function's argument, you can access the object with information about the event.

Among the fields of this object, you can find the **cancel** flag that allows you to prevent the row from being removed from the data source. In order to accomplish that, set this flag to *true*. The behavior of the rows, whose removal was canceled, depends on the [edit mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode). In [row mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Row_Mode), such a row is preserved. In [batch mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode), such rows are displayed as recoverable. If you need to perform an asynchronous action before deleting the row, assign a **jQuery.Promise** object to the **cancel** field. The row will be actually deleted when the **jQuery.Promise** object is resolved.

[note] In a batch edit mode, when several rows are to be removed, the **onRowRemoving** function will be executed for each row individually.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingrow/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
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
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Row's data.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cancel<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->boolean|Promise<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
A flag allowing you to prevent the row from being removed from the data source.
<!--/typeFunctionParamDescription1_field6-->
