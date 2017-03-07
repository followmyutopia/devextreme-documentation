**DataGrid** provides API methods for editing, inserting and removing data from code.

* **Editing**		
In the [row](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Row_Mode) edit mode, to switch a row into the editing state, call the [editRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#editRowrowIndex) method. To switch it back to the normal state, call either the [saveEditData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData) or [cancelEditData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cancelEditData) methods depending on whether changes must be saved or discarded.

	In the [batch](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode) edit mode, to switch a cell into the editing state, call the [editCell(rowIndex, columnIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#editCellrowIndex_columnIndex) method. To switch it back to the normal state, call the [closeEditCell()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#closeEditCell) method. After editing is completed, call either **saveEditData()** or **cancelEditData()** to save or cancel all changes in the data source.

* **Insertion**			
To insert a new empty row into a grid, call the [addRow()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#addRow) method.

* **Removing**		
To remove a row, call the [deleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deleteRowrowIndex) method with the index of the row to be removed passed as the parameter. If you have set the batch edit mode, you can recover a removed row. For this purpose, call the [undeleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#undeleteRowrowIndex) method.

The aforesaid methods accept a row index or a column index as their parameters. When calculating the row index, note that if you have several pages in a grid, grid rows are indexed beginning with 0 on each page. If you use [grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/) in your grid, [group rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows) are counted too and thus have row indexes, although they cannot be edited. As calculating the column index tends to be slightly more complicated, see the [Calculating the Column Index](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index) topic to learn how to do it.
