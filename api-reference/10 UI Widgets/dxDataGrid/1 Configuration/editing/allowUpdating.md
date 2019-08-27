---
id: dxDataGrid.Options.editing.allowUpdating
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can update rows. It is called for each data row when defined as a function.

##### param(options): Object
Information about the current row.

##### field(options.component): dxDataGrid
The widget's instance.

##### field(options.row): dxDataGridRowObject
The row's properties.

##### return: Boolean
**true** if the row can be updated; otherwise **false**.

---
See an example in the [allowDeleting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting) option.

#####See Also#####
- [onRowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdating)
- [onRowUpdated](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdated)
- [cellValue(rowIndex, visibleColumnIndex, value)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex_value)