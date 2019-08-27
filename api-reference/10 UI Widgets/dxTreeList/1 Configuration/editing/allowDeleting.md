---
id: dxTreeList.Options.editing.allowDeleting
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can delete rows. It is called for each data row when defined as a function.

##### param(options): Object
Information about the current row.

##### field(options.component): dxTreeList
The widget's instance.

##### field(options.row): dxTreeListRowObject
The row's properties.

##### return: Boolean
**true** if the row can be deleted; otherwise **false**.

---
See an example in the [allowAdding](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowAdding) option.

#####See Also#####
- [onRowRemoved](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowRemoved)
- [onRowRemoving](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowRemoving)
- [deleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deleteRowrowIndex)
- [undeleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#undeleteRowrowIndex)