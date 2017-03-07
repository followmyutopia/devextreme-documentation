A column header is the top cell of a column that contains a text describing the contents of the column.

![DevExtreme DataGrid ColumnHeaders](/Content/images/doc/16_2/DataGrid/ColumnHeaders.png)

A text in a column header is called "caption". Usually, a caption is generated automatically on the base of the [data field](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField) assigned to this column. In this case, the caption is a more friendly name of the data field. For example, if *"orderDate"* is the data field, then the caption will be *"Order Date"*. There may be cases, when specifying the caption is required, e.g., when you use a [calculated column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) and do not assign any data field. Then, assign the required text to the [caption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption) property of the column.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		columns: [{
				dataField: 'CompanyName',
				caption: 'Company',
				// ...
			}, {
				caption: 'Contact Name',
				// ...
			},
			// ...
		]
    });

Column headers in **DataGrid** are also used for sorting. To apply sorting to a column, a user must click its header. An arrow indicating the applied sort order will appear in the column header. In addition, the user can use a context menu to apply sorting. It is invoked by a right-click on a column header. Various sort orders can be selected within this context menu.

![DevExtreme DataGrid ColumnHeaders](/Content/images/doc/16_2/DataGrid/ColumnHeadersWithSorting.png)

In case column headers are not required, hide them by assigning *false* to the grid's [showColumnHeaders](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#showColumnHeaders) property.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		showColumnHeaders: false
    });

