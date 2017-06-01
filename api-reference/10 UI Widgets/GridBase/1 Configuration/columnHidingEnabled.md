<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if [allowColumnResizing]({basewidgetpath}/Configuration/#allowColumnResizing) is **true** and [columnResizingMode]({basewidgetpath}/Configuration/#columnResizingMode) is *"widget"*.
<!--/shortDescription-->

<!--fullDescription-->
When displaying the widget in your app, you may want to use different layouts for different screen sizes. While desktop monitors provide enough space to display all columns, mobile screens do not. You can enable the widget to hide certain columns automatically if they do not fit into the screen size by assigning *true* to the **columnHidingEnabled** option. Information from hidden columns is available in the adaptive detail row.

When hiding columns, the widget uses the following principles:

1. The lower the [hidingPriority]({basewidgetpath}/Configuration/columns/#hidingPriority), the higher the probability that the widget hides this column. When you do not specify hiding priorities, their values ascend from right to left beginning with 0. This means that the widget hides the rightmost columns at first.
2. If the [width of a column]({basewidgetpath}/Configuration/columns/#width) is specified, this column is hidden only if it exceeds the [width of the widget]({basewidgetpath}/Configuration/#width).
3. If the width of a column is not specified, this column is hidden only if its content overflows it.

#####See Also#####
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
<!--/fullDescription-->
