<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Gets data objects of currently selected rows. 
<!--/shortDescription-->

<!--returnType-->array | Promise<!--/returnType-->
<!--returnDescription-->
Data objects of currently selected rows or a Promise of the jQuery.Deferred object.
<!--/returnDescription-->

<!--fullDescription-->
When selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of objects.

[note][Calculated values](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) cannot be obtained because this method gets data objects directly from the data source.

#####See Also#####
- [cellValue(rowIndex, dataField)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_dataField)
- [cellValue(rowIndex, visibleColumnIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_visibleColumnIndex)
- [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys)
<!--/fullDescription-->
