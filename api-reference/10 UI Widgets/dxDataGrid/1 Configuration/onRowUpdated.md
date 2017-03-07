<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Customize after update row<!--/d-->
<!--EventForAction-->..\4 Events\rowUpdated.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
<!--fp1d-->The info of a row.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->The data of the current row.<!--/fp1_field4d-->
<!--fp1_field5d-->The key current row.<!--/fp1_field5d-->
<!--fp1_field6d-->Information on the occurred error during updating.<!--/fp1_field6d-->
===========================================================================

<!--shortDescription-->
A handler for the [rowUpdated](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowUpdated) event.
<!--/shortDescription-->

<!--fullDescription-->
The **rowUpdated** event fires after a row has been updated in the data source. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find the data object and the key value of the updated row. Note that the data object contains only those fields of a row that have been updated.

[note] In [batch edit mode](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode), when several rows have been updated, the **onRowUpdated** function will be executed for each row individually.

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
Updated data of the row; contains only those fields that have been updated.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->error<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->JavaScript Error object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a> object that defines the occurred error.
<!--/typeFunctionParamDescription1_field6-->
