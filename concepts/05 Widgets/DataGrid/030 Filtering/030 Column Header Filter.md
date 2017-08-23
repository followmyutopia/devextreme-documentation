To filter data against a specific column, an end user can invoke the column's header filter. By default, the filter dropdown displays unique column values (use the **columns**&nbsp;|&nbsp;[headerFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/) option to customize the displayed values). An end user can select any item(s) from this list. This action automatically filters grid data (displays records that have the selected value(s) in the current column).

![DevExtreme DataGrid Header Filter](/Content/images/doc/17_2/DataGrid/ColumnHeaderFilter.png)

To make column header filtering available for end users, set the grid's [headerFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/).**visible** option to **true**.

By default, the filter button is available for all grid columns. However, you can hide it for individual columns by setting their [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) option to **false**.

	<!--JavaScript-->var gridOptions = {
		// ...
		headerFilter: { visible: true },
		columns: [{
			allowFiltering: false,
			// ...
		}, //...
		]
    };

You can specify whether to include or exclude the records with the values selected in the filter dropdown list of a particular column. For this purpose, use the column's [filterType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterType) option.

	<!--JavaScript-->var gridOptions = {
		// ...
		headerFilter: { visible: true },
		columns: [{
			filterType: 'exclude',
			// ...
		}, //...
		]
    };

If a filter must be applied to a column initially, set the [filterValues](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValue) option of this column. Note that the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) option of this column must be set to **true**. The following code leaves only those records, whose value in the *"City"* column equals 'Los Angeles'.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		columns: [{
			dataField: 'City',
			filterValues: ['Los Angeles']
			// ...
		}, //...
		]
    });

To ensure that users cannot change the initially set filtering, make the column header filters invisible by setting the **headerFilter**.[visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/#visible) or **columns**.[allowHeaderFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHeaderFiltering) option to **false**.