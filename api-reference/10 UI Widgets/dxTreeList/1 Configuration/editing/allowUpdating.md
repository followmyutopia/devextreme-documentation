---
id: dxTreeList.Options.editing.allowUpdating
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can update rows. It is called for each data row when defined as a function

##### param(options): Object
Information about the current row.

##### field(options.component): dxTreeList
The widget's instance.

##### field(options.row): dxTreeListRowObject
The row's properties.

##### return: Boolean
**true** if the row can be updated; otherwise **false**.

---
See an example in the [allowAdding](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowAdding) option.

#####See Also#####
- [onRowUpdating](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowUpdating)
- [onRowUpdated](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowUpdated)
- [cellValue(rowIndex, visibleColumnIndex, value)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_visibleColumnIndex_value)