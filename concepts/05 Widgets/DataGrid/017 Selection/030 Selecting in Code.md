The **DataGrid** provides several methods with which to perform selection in code. If you have row keys, call the [selectRows(keys, preserve)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectRowskeys_preserve) method passing them as the first argument. If you only have data objects, obtain the keys using the [keyOf(obj)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#keyOfobj) method and then call the **selectRows(keys, preserve)** method.

	<!--JavaScript-->var key = dataGridInstance.keyOf(dataObject);
	dataGridInstance.selectRows(key);

[note]Calling this method with one argument deselects previously selected records. If you need these records to remain selected, call this method with *true* as the second argument.

Additionally, you can select rows by their indexes using the [selectRowsByIndexes(indexes)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectRowsByIndexesindexes) method. 

	<!--JavaScript-->dataGridInstance.selectRowsByIndexes([1, 8, 6]);

When row indexes are being calculated, data and group rows are counted, though only data rows can be selected. Refer to the [Grid Rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows) article to get more information on how to calculate row indexes.

[note] Unlike **selectRows(keys, preserve)**, the **selectRowsByIndexes(indexes)** method applies selection that will be cleared automatically once the current page is changed. Therefore, to preserve this selection, call this method within the [onContentReady](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onContentReady) function.

If you need to select all rows in a grid, call the [selectAll()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectAll) method.

	<!--JavaScript-->dataGridInstance.selectAll();

[note]Whether the method selects records on the current page or on all pages is specified by the [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode) option.

Selection can also be cleared in code by calling the [clearSelection()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearSelection) method.

	<!--JavaScript-->dataGridInstance.clearSelection();

If you need to deselect specific records, call the [deselectRows(keys)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectRowskeys) method.

	<!--JavaScript-->dataGridInstance.deselectRows([4, 6, 1]);