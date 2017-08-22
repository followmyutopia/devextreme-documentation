To apply a filter in code, call the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method. Pass an array with the following members to this method.

1. The data source field by which data items are filtered.
2. The comparison operator. The following operators are available: *"=", "<>", ">", ">=", "<", "<=", "between"*, "startswith", "endswith", "contains", "notcontains"*.
3. The value with which data source field values should be compared.

For example, the following call leaves only those records that have a value of more than 20 in the *'Amount'* field.

	<!--JavaScript-->dataGridInstance.filter(['Amount', '>', 20]);

The **filter(filterExpr)** method applied the specified filter to the grid's data source. The filtering that is applied by end users is added to the data source's filter. To clear all the applied filters, call the [clearFilter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilter) method.

	<!--JavaScript-->dataGridInstance.clearFilter();

A user-specified filter can also be cleared from code. For this purpose, assign **undefined** to the [filterValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValue) option of the required column using the [columnOption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method.
	
	<!--JavaScript-->dataGridInstance.columnOption('columnId', 'filterValue', undefined);

To get the filter applied to the grid's data source, call the grid's [filter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filter) method without parameters. To get the total filter combined from the data source filter and the filters applied in a UI, use the grild's [getCombinedFilter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilter) method.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridfilteringandsortingfilteringapi/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>