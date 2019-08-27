---
id: dxDataGrid.expandRow(key)
---
---
##### shortDescription
Expands a group or a master row with a specific key.

##### return: Promise<void>
A Promise that is resolved after the row is expanded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(key): any
The key of the group or the master row.

---
To expand a group row, call this method with an array (each member of which is a grouping value). To expand a [master row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/), pass its key to this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups)
- [Master-Detail Interface - API](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API)