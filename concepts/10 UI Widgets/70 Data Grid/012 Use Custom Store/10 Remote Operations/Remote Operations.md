If you need to process data using the remote web service, enable the remote operations. They are useful when the grid works with large amount of data, because in that case [remote operations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) make the grid responses faster.

The following remote operations are available.

- [filtering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#filtering)
- [sorting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#sorting)
- [paging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#paging)
- [grouping](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#grouping)
- [summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary)

See the [How to implement a data service that supports remote operations for DataGrid](https://www.devexpress.com/Support/Center/Example/Details/T334360) example for more information about implementing a data service that supports remote operations for the **DataGrid** widget.

Remote operations introduce a number of restrictions that are listed below.

- The widget does not support sorting, grouping and filtering by the [calculated columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue).
- Custom grouping and custom sorting configuration using **functions** are not supported ([calculateGroupValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue) and [calculateSortValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateSortValue) accept strings only).
