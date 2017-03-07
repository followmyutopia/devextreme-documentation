In **DataGrid**, records can be sorted by a single or multiple columns. To set an appropriate sorting mode, use the [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sorting/#mode) field of the **sorting** configuration object.

	<!--JavaScript-->var dataGridOptions = {
		// ...
		sorting: {
			mode: 'single' // or 'multiple'
		}
    };