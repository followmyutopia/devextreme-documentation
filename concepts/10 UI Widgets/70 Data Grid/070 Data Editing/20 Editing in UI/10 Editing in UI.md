Editing in a UI is specified by the fields of the [editing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/) configuration object. Among them, you can find fields that enable/disable insertion and removing, as well as editing itself. By default, all these features are disabled. In order to enable them, add the following code to the grid's configuration object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		editing: {
			allowUpdating: true, // Enables editing
			allowAdding: true, // Enables insertion
			allowDeleting: true // Enables removing
		}
    });

Additionally, you can specify whether a user can edit values in a specific column. For this purpose, use the [allowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowUpdating) option of this column.

Editing in the **DataGrid** widget can be carried out in a row or batch mode. To specify the mode, set the **editing** | [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) option to the *'row'*, *'batch'*, *'cell'* or *'form'* as shown in the code snippet below.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		editing: {
			mode: 'row', // 'batch', 'cell', 'form'
			// ...
		}
    });

#####See Also#####
- [DataGrid - Data Modification Controls](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Data_Modification_Controls)