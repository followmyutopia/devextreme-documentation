<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the order in which columns are hidden when the widget adapts to the screen or container size. Ignored if [allowColumnResizing]({basewidgetpath}/Configuration/#allowColumnResizing) is **true** and [columnResizingMode]({basewidgetpath}/Configuration/#columnResizingMode) is *"widget"*.
<!--/shortDescription-->

<!--fullDescription-->
The **hidingPriority** is a unique positive integer that ascends from right to left beginning with 0. Columns with low **hidingPriority** are hidden first.

[note]Specifying **hidingPriority** for at least one column enables the column hiding feature and cancels the default hiding priorities.

#####See Also#####
- [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled)
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
<!--/fullDescription-->