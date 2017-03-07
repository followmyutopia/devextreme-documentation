<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the keys of currently selected grid records. 
<!--/shortDescription-->

<!--returnType-->array | Promise<!--/returnType-->
<!--returnDescription-->
The array of keys of the currently selected records or a Promise of the jQuery.Deferred object.
<!--/returnDescription-->

<!--fullDescription-->
If a field providing key values is not specified in a [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key. In this case, the **getSelectedRowKeys()** method returns data objects corresponding to the selected records, thus operating exactly as the [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) method.

Note that when selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of keys.

#####See Also#####
- [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/)
<!--/fullDescription-->