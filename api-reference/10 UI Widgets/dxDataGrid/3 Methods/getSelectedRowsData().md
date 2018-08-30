===================================================================
===================================================================

<!--shortDescription-->
Gets the selected rows' data objects. 
<!--/shortDescription-->

<!--returnType-->Array<any>|Promise<any><!--/returnType-->
<!--returnDescription-->
The selected rows' data objects or a Promise that is resolved with an array of these objects.
<!--/returnDescription-->

<!--fullDescription-->
When selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise (a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery). The selected rows' data is passed to the function that resolves this Promise. This is data before being processed in the **DataSource**.

[note][Calculated values](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection)
- [cellValue(rowIndex, dataField)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_dataField)
- [cellValue(rowIndex, visibleColumnIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex)
- [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys)
<!--/fullDescription-->