---
id: dxDataGrid.expandAll(groupIndex)
---
---
##### shortDescription
Expands master rows or groups of a specific level. Does not apply if data is remote.

##### param(groupIndex): Number | undefined
The group's level. Pass **undefined** to expand all groups. Pass *-1* to expand all master rows.

---
[note] The [rowExpanded](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowExpanded) event is not raised when you call this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups)
- [Master-Detail Interface - API](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API)