<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_2/Framework/DataGridTutorial/Step9/grid.html" data-show-first="grid.html">
To enable grid editing, set its **editing** | [allowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowUpdating) option to *true*.

Grid records can be edited in one of three modes - *"row"*, *"batch"*, *"cell"* and *"form"* - specified by the **editing** | [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) option. In row and form modes, grid records are edited by rows. To edit a row, a user must click the *"Edit"* button located in a specific grid column. Changes made in the row can be saved or discarded by clicking the *"Save"* or *"Cancel"* button in this row.

In batch mode, all changes made in the grid will not be saved until the *"Save"* button is clicked. This button becomes active when the user makes changes. The *"Revert"* button also becomes active. When this button is clicked, the changes are reverted. In this mode, grid records are edited in cells. To edit a cell, a user must click it. Moreover, in batch mode, the user can recover deleted rows if changes have not yet been saved. For this purpose, he or she must use the *"Undelete"* button, which appears instead of the *"Delete"* button in the removed row.

In cell mode, all changes made in grid cells are reflected in the data source immediately after the cell switches from the editing state back to the normal state.

Additionally, you can prohibit editing in a specific column. For this purpose, set the [allowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowUpdating) option of the column to *false*.

For the grid being configured, the row edit mode suits better, so enable editing and set the **mode** option to *"row"* as shown below.
</article>