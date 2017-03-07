<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when a grid record has been selected/deselected.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onSelectionChanged) option to handle the event.

When implementing a function that handles this event, you can use arrays of keys of those grid records that have been currently selected or deselected. These arrays can be accessed through the fields of the object passed to the function as the argument. Arrays of all selected records and their data are also accessible through the same object.

[note]The following fields of the object passed to the function are available only if the selection is [instant](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred): *currentSelectedRowKeys*, *currentDeselectedRowKeys*, *selectedRowKeys*, *selectedRowsData*.

If a field providing key values is not specified in a [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key for a grid record. In this case, all arrays passed to the **selectionChanged** event handler contain data objects instead of keys.

To retrieve data by a key, use the [byKey(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#byKeykey) method.

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
