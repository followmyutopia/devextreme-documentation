<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Customize before insert row<!--/d-->
<!--EventForAction-->..\4 Events\initNewRow.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
<!--fp1d-->The info of a row.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->The data of the current row.<!--/fp1_field4d-->
===========================================================================

<!--shortDescription-->
A handler for the [initNewRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#initNewRow) event.
<!--/shortDescription-->

<!--fullDescription-->
By default, a row inserted into a grid contains no data. If you need this row to contain some data, e.g., default values of row cells, implement a function handling the **initNewRow** event. Use the **data** field of the object passed to this function as the argument to access the data object of the new row. Initially, this data object is empty. Populate this object with data in such a manner that its fields correspond to the fields of a [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) object.

[note]Populating all fields of the data object is not necessary. Populate only those of them that must initialize the specific cells of a new row.

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
Data of the inserted row; initially empty.
<!--/typeFunctionParamDescription1_field4-->
