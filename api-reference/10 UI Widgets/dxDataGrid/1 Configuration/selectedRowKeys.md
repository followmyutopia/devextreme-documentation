<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the keys of the records that must appear initially selected.
<!--/shortDescription-->

<!--fullDescription-->
[note]This option applies only if selection is [instant](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred).

Apart from [runtime selection](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/), the **DataGrid** provides the capability to display specific grid records selected initially. For this purpose, specify an array containing the keys of grid records that must appear selected and assign it to the **selectedRowKeys** field.

[note]To access a grid record by a key, a field providing key values must be specified in the **key** option of the underlying [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) of the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource). If no key was specified, the whole data object is considered the key, however, we recommend specifying the key to prevent selection from being duplicated.

You can obtain the selected row keys or data objects. For further information, see the [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys) and [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) method descriptions.
<!--/fullDescription-->