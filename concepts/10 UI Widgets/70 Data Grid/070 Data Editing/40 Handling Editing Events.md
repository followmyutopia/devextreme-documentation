﻿While modifying data (either through editing, insertion or deletion) a number of events are raised that you can handle. The options that allow you to handle these events are listed below. Each option accepts a callback function that performs actions required by you.

- **Editing Events**		
When editing has been initiated by a user or in code, the [editingStart](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editingStart) event fires. Within the function handling this event, you can manipulate the row (in [row edit mode](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Row_Mode) and [form edit mode](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Form_Mode)) or its cell (in [batch edit mode](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode)) that is about to enter the editing state. You can also prevent the row or cell from entering the editing state using the **cancel** field of the object passed to the **editingStart** handler as the argument.

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			onEditingStart: function (info) {
				info.cancel = true
			}
		});

	When editing is complete, changes must be transmitted to the data source. But first, a function handling the [rowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowUpdating) event is executed. Within this function, you can also cancel the updating of the data source or change the data that must be transmitted to it using the fields of the object passed to this function as the argument.

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			onRowUpdating: function (info) {
				// specify required actions here
			}
		});

	After the data source has been updated, the [rowUpdated](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowUpdated) event fires. To handle this event, assign a function to the [onRowUpdated](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdated) option. When implementing this function, you can use the updated data and the key of the row whose data has been updated. To access them, use the fields of the function's argument as you would other event-handling functions.

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			onRowUpdated: function (info) {
				// specify required actions here
			}
		});

- **Insertion Events**		
When inserted, a new row appears empty in a grid. If you need to initialize it, implement a function handling the [initNewRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#initNewRow) event and assign it to the [onInitNewRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onInitNewRow) option. Populate the **data** field of the object, which is passed to this function as the argument, with data in such a manner that its fields correspond to the fields of a [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) object.

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			onInitNewRow: function (info) {
				info.data = {
					field1: 'data1',
					field2: 'data2',
					// ...
				}
			}
		});

	Before an inserted row is transmitted to the data source, the [rowInserting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowInserting) event will fire. To handle it, implement a function and assign it to the [onRowInserting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowInserting) option. Within this function, you can cancel the insertion of the new row or change its data using the fields of the object passed to this function as the argument.

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			onRowInserting: function (info) {
				// specify required actions here
			}
		});

	After a row has been inserted into the data source, the [rowInserted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowInserted) event fires. When implementing a handling function for this event, you can use the data and the key of this row. To access them, use the fields of the function's argument similarly to other event-handling functions.

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			onRowInserted: function (info) {
				// specify required actions here
			}
		});

- **Removing Events**	
Before a row is removed from a data source, the [rowRemoving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowRemoving) event fires. To handle this event, implement a function and assign it to the [onRowRemoving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoving) option. Within this function, you can cancel the removing of the row or manipulate it with data using the fields of the object passed to this function as the argument.

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			onRowRemoving: function (info) {
				// specify required actions here
			}
		});

	After a row has been removed from the data source, the [rowRemoved](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rowRemoved) event fires. To handle this event, implement a function and assign it to the [onRowRemoved](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoved) option. When implementing this function, you can use the data and the key of the removed row. To access them, use the fields of the function's argument similarly to other event-handling functions.

		<!--JavaScript-->$("#gridContainer").dxDataGrid({
			// ...
			onRowRemoved: function (info) {
				// specify required actions here
			}
		});