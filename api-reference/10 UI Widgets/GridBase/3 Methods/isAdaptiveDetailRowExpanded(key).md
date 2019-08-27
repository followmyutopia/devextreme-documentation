---
id: GridBase.isAdaptiveDetailRowExpanded(key)
---
---
##### shortDescription
Checks whether an adaptive detail row is expanded or collapsed.

##### return: Boolean
*true* if the adaptive detail row is expanded; **false** if collapsed.

##### param(key): any
The key of the data row to which the adaptive detail row belongs.

---
To access a data row by its key, specify the field that provides keys in the [data source]({basewidgetpath}/Configuration/#dataSource). If no key was specified, the whole data object is considered the key.

#####See Also#####
#include common-link-callmethods
- [expandAdaptiveDetailRow(key)]({basewidgetpath}/Methods/#expandAdaptiveDetailRowkey)
- [collapseAdaptiveDetailRow()]({basewidgetpath}/Methods/#collapseAdaptiveDetailRow)
- [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled)