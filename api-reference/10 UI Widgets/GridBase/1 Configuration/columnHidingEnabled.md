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
Specifies whether the widget should hide columns in order to adapt to the screen or container size.
<!--/shortDescription-->

<!--fullDescription-->
You may want to use different layouts for different screen sizes when displaying the widget in your app. While desktop monitors provide enough space to display all columns, mobile screens do not. In that case, you can enable the widget to hide certain columns automatically if they do not fit into the screen size. For this purpose, assign *true* to the **columnHidingEnabled** option. Information from hidden columns is still available in the adaptive detail row.

For hiding columns, the widget uses the following principles:

1. The lower the [hidingPriority]({basewidgetpath}/Configuration/columns/#hidingPriority) option value, the higher the probability that this column is hidden. When you do not specify hiding priorities explicitly, their values ascend from right to left beginning with 0. This means that the widget hides the rightmost columns at first.
2. If the [width of a column]({basewidgetpath}/Configuration/columns/#width) is specified, this column hides only if it does not fit into the [width of the widget]({basewidgetpath}/Configuration/#width).
3. If the width of a column is not specified, this column hides only if its content overflows.

#####See Also#####
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
<!--/fullDescription-->