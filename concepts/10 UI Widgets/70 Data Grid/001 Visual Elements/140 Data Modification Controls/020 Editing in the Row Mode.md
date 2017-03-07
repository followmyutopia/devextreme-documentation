This subtopic describes controls that appear in the **DataGrid** widget when the [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) property is set to *"row"*. These controls are illustrated by the image below.

![DevExtreme DataGrid Editing](/Content/images/doc/16_1/DataGrid/EditingRow.png)

Depending on the specified properties of the [editing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/) object, different controls are presented in a grid. These controls and the options that enable them are listed below.

* **allowUpdating** is *true*		
This setting supplements each grid row with the "Edit" button. Clicking this button switches the corresponding row into the editing state. At the same time, the "Save" and "Cancel" buttons appear.

* **allowAdding** is *true*		
This setting adds the "Add" button to the upper-right corner of the **DataGrid** widget.

* **allowDeleting** is *true*		
This setting adds the "Delete" button to each grid row.

In addition, the text of a certain button can be changed using the fields of the **editing** | [texts](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts/) object.

<div class="simple-table">
<table>
	<tr>
		<th>Button</th>
		<th>Field</th>
	</tr>
	<tr>
		<td>Edit</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#editRow">editRow</a></td>
	</tr>
	<tr>
		<td>Delete</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#deleteRow">deleteRow</a></td>
	</tr>
	<tr>
		<td>Save</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#saveRowChanges">saveRowChanges</a></td>
	</tr>
	<tr>
		<td>Cancel</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#cancelRowChanges">cancelRowChanges</a></td>
	</tr>
	<tr>
		<td>Add</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#addRow">addRow</a> <sup><em>h</em></sup></td>
	</tr>
</table>
</div>

[note] The <sup>*h*</sup> mark directs the property to specify text for the hint appearing when a user hovers the mouse pointer over a button, but not for that button.