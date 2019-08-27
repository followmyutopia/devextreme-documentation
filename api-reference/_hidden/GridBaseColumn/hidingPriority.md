---
id: GridBaseColumn.hidingPriority
type: Number
default: undefined
---
---
##### shortDescription
Specifies the order in which columns are hidden when the widget adapts to the screen or container size. Ignored if [allowColumnResizing]({basewidgetpath}/Configuration/#allowColumnResizing) is **true** and [columnResizingMode]({basewidgetpath}/Configuration/#columnResizingMode) is *"widget"*.

---
The **hidingPriority** is a unique positive integer that ascends from right to left beginning with 0 by default. Columns with low **hidingPriority** are hidden first.

[note]Specifying **hidingPriority** for at least one column enables the column hiding feature and cancels the default hiding priorities.

[note] [Fixed]({basewidgetpath}/Configuration/columns/#fixed) columns ignore the **hidingPriority** and [allowHiding]({basewidgetpath}/Configuration/columns/#allowHiding) options.

#####See Also#####
- [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled)
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
- [Adaptability](/Documentation/Guide/Widgets/{WidgetName}/Columns/Adaptability/)