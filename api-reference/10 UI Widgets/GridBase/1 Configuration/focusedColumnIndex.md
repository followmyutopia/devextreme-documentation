---
id: GridBase.Options.focusedColumnIndex
type: Number
default: -1
firedEvents: focusedCellChanged
---
---
##### shortDescription
Specifies the index of the column focused initially or currently in the data row area.

---
This index depends on the column's location and can change dynamically (for example, when columns are [reordered](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Reordering/)). The following image illustrates the indexing system. Note that [command columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/) have indexes but cannot be focused.

![DevExtreme HTML5 JavaScript {WidgetName} Column Index](/Content/images/doc/19_2/{WidgetName}/visual_elements/columnIndexes.png)

The default index, *-1*, means that no column is focused.

#####See Also#####
- [onFocusedCellChanging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedCellChanging.md '{basewidgetpath}/Configuration/#onFocusedCellChanging') | [onFocusedCellChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedCellChanged.md '{basewidgetpath}/Configuration/#onFocusedCellChanged')
- [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex') | [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey')