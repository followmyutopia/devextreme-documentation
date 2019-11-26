---
id: dxTreeList.addColumn(columnOptions)
---
---
##### shortDescription
Adds a new column.

##### param(columnOptions): Object | String
The column's [configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/columns.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') or a data field for which the column should be created.

---
This method is intended to add columns at runtime. To add columns at design-time, use the [columns]({basewidgetpath}/Configuration/columns/) array.

If [stateStoring]({basewidgetpath}/Configuration/stateStoring/) is enabled, the added column is saved in the widget's state after the creation.

[note] Do not use this method to control a column's visibility; use the column's [visible]({basewidgetpath}/Configuration/columns/#visible) option instead.

#####See Also#####
#include common-link-callmethods
