You can use the following methods to export grid data in code.

- [exportToExcel(selectionOnly)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#exportToExcelselectionOnly)    
Exports grid data to an XSLX file - either all rows or selected rows.


To influence the process of exporting grid data, handle the following events.

- [exporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exporting)  
Allows you to request export details and prevents exporting.

- [exported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exported)  
Allows you to get notified when exporting is completed.

- [fileSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#fileSaving)        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved in a file on the user's local storage.