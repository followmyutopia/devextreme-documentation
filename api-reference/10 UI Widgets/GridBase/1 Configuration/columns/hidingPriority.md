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
Specifies the order according to which columns must be concealed when the widget adapts to the screen or container size.
<!--/shortDescription-->

<!--fullDescription-->
The lesser the index assigned to this option, the higher the probability that this column will be hidden. By default, indexes ascend from right to left beginning with 0. It means that the rightmost column will most likely be hidden when the widget adapts, while the leftmost column will stay.

[note]Specifying **hidingPriority** for at least one column enables the column hiding feature and cancels the default hiding priorities, that is, columns without priority set explicitly are not hidden.

#####See Also#####
- [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled)
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
<!--/fullDescription-->