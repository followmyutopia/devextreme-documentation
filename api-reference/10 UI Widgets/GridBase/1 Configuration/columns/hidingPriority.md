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
Specifies the order in which columns conceal when the widget adapts to the screen or container size. 
<!--/shortDescription-->

<!--fullDescription-->
While adapting, the widget hides columns according to their hiding priority. A zero-based index assigned to the **hidingPriority** option designates this priority. The lower the index is, the higher the probability that the widget hides this column. 

[note]Specifying **hidingPriority** for at least one column enables the column hiding feature and cancels the default hiding priorities, that is, columns without priority set explicitly are not hidden.

#####See Also#####
- [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled)
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
<!--/fullDescription-->