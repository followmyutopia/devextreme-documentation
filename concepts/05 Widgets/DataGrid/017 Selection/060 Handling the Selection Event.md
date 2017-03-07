When one or several rows are being selected, the [selectionChanged](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#selectionChanged) event fires. To handle it, implement a function and assign it to the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onSelectionChanged) option or bind it to the event using the [on](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#oneventName_eventHandler) method. Within this function, you can specify performing actions if it is required by your scenario. 

When implementing the handling function, use information about selected and deselected rows. This information is accessible by using the fields of the object passed to this function. 

[note]The information about selected and deselected rows can be obtained only when selection is [instant](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred).

The following fields are available.

* **currentSelectedRowKeys**		
Contains the keys of freshly selected rows.

* **currentDeselectedRowKeys**		
Contains the keys of freshly deselected rows.

* **selectedRowKeys**		
Contains the keys of all selected rows.

* **selectedRowsData**		
Contains the data of all selected rows.

[note] If a field providing key values is not specified in a data source, the whole data object is considered key for a grid record. In this case, all arrays passed to the **selectionChanged** handler contain data objects instead of keys.

Additionally, you can obtain the keys or data objects of selected rows outside the **selectionChanged** handler at any point of the lifetime of your application. For this purpose, use the [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys) and [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) methods.