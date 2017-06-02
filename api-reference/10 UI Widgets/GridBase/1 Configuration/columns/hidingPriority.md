<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the order in which columns are hidden when the widget adapts to the screen or container size. Ignored if [allowColumnResizing]({basewidgetpath}/Configuration/#allowColumnResizing) is **true** and [columnResizingMode]({basewidgetpath}/Configuration/#columnResizingMode) is *"widget"*.
<!--/shortDescription-->

<!--fullDescription-->
The lower the index assigned to this option, the higher the probability that this column is hidden. Indexes ascend from right to left beginning with 0 by default, which means that the rightmost column is hidden first when the widget adapts.

[note]Specifying **hidingPriority** for at least one column enables the column hiding feature and cancels the default hiding priorities.

#####See Also#####
- [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled)
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
<!--/fullDescription-->