<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Customize after save inserted row<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->The info of a row.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->The data of the current row.<!--/fp1_field4d-->
<!--fp1_field5d-->The key current row.<!--/fp1_field5d-->
<!--fp1_field6d-->Information on the occurred error during inserting.<!--/fp1_field6d-->
===========================================================================

<!--shortDescription-->
Fires after a row has been inserted into the data source. 
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onRowInserted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowInserted) option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its argument. Among the fields of this object, you can find the key and data of the inserted row.

[note]In [batch edit mode](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode), when several rows have been inserted, the **rowInserted** event will fire for each row individually.

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
Data of the row.
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
