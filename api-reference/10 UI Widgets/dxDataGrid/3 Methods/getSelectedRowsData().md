---
id: dxDataGrid.getSelectedRowsData()
---
---
##### shortDescription
Gets the selected rows' data objects.

##### return: Array<any> | Promise<any>
Data objects of selected rows or a Promise that is resolved with an array of these objects. The data objects are stored in the order the user selects rows.

---
When selection is [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred), the method returns a Promise (a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery). The selected rows' data is passed to the function that resolves this Promise. This is data before being processed in the **DataSource**.

[note][Calculated values](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection)
- [cellValue(rowIndex, dataField)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_dataField)
- [cellValue(rowIndex, visibleColumnIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex)
- [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys)