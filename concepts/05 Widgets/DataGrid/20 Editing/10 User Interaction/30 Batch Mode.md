In the batch mode, like in the [cell mode](/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Cell_Mode), a user edits data cell by cell. However, in this mode, the widget stores changes in a buffer until a user clicks the global *"Save"* button instead of saving them immediately. This mode is useful for saving multiple changes by sending only one request to the server.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Batch Mode](/Content/images/doc/17_2/DataGrid/editing/batch_mode.png)

When a user clicks a row's *"Delete"* button, the widget only marks the row as deleted. Users can restore this row by clicking the *"Undelete"* button if they have not saved the changes yet. They can also discard all unsaved changes by clicking the *"Revert"* button.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Batch Mode Deletion](/Content/images/doc/17_2/DataGrid/editing/batch_mode_deletion.png)

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/BatchEditing/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>