In the batch mode, changes are buffered before being transmitted to the data source to prevent the data source from excessive updates when it is frequently edited.

* **Editing**		
Cells edit rows in the batch mode. When a user clicks a cell, it enters the editing state, and the user can change its value. To return the cell to its normal state, the user clicks another cell or any other area in the grid. This saves the changes made to the cell in a buffer and marks the cell as edited.

	![DevExtreme DataGrid EditingBatchMode](/Content/images/doc/17_1/DataGrid/EditingBatchMode.gif)

* **Insertion**		
A user must click the *"Add"* button indicated on a grid by a cross glyph to insert a new row. The new row is empty, and the user can fill it with data. The same editing rules as described above apply to this new row.

	![DevExtreme DataGrid InsertionBatchMode](/Content/images/doc/17_1/DataGrid/InsertionBatchMode.gif)

* **Removing**		
A user must click the *"Delete"* button accompanying this row to remove a row. This marks it as removed, and the "Undelete" button for recovering the row replaces "Delete" button.

	![DevExtreme DataGrid RemovingBatchMode](/Content/images/doc/17_1/DataGrid/RemovingBatchMode.gif)

All changes made in a grid do not transmit to the data source until the user clicks a floppy disk glyph that represents the *"Save"* button on a grid. The *"Revert"* button which discards all changes is next to this button, and they are both inactive until a change is made. New and edited cells and deleted rows are highlighted while changes are not saved or discarded.

[note] If the user closes the browser without saving changes, they are lost.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingbatch/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
