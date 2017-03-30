<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\selectionChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [selectionChanged]({basewidgetpath}/Events/#selectionChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
The **selectionChanged** event fires when a grid record has been selected/deselected. When implementing a function that handles this event, you can use arrays of keys of those grid records that have been currently selected or deselected. These arrays can be accessed through the fields of the object passed to the function as the argument. Arrays of all selected records and their data are also accessible through the same object.

[note]The following fields of the object passed to the function are available only if the selection is [instant]({basewidgetpath}/Configuration/selection/#deferred): *currentSelectedRowKeys*, *currentDeselectedRowKeys*, *selectedRowKeys*, *selectedRowsData*.

If a field providing key values is not specified in a [data source]({basewidgetpath}/Configuration/#dataSource), the whole data object is considered the key for a grid record. In this case, all arrays passed to the **onSelectionChanged** function contain data objects instead of keys.

To retrieve data by using a key, use the [byKey(key)]({basewidgetpath}/Methods/#byKeykey) method.

<a href="http://js.devexpress.com/Demos/DataGridGallery/#chart/datagridsselectionsingleselection" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
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
<!--typeFunctionParamName1_field4-->currentSelectedRowKeys<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The keys of the rows that have been selected currently.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->currentDeselectedRowKeys<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->array<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The keys of the rows that have been deselected currently.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->selectedRowKeys<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->array<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The keys of all selected rows.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->selectedRowsData<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->array<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The data of all selected rows.
<!--/typeFunctionParamDescription1_field7-->
