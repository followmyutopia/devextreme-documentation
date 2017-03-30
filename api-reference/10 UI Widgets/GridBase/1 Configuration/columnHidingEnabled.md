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
Displaying the widget in your app, you may want to use different layouts for different screen sizes. While desktop monitors provide enough space to display all columns, mobile screens do not. In that case, you can enable the widget to hide certain columns automatically if they do not fit into the screen size. For this purpose, assign *true* to the **columnHidingEnabled** option. Information from hidden columns will still be available in the adaptive detail row.

When hiding columns, the widget uses the following principles.

1. The lesser the [hidingPriority]({basewidgetpath}/Configuration/columns/#hidingPriority) is, the more probably the widget will hide this column.
2. If the [width of a column]({basewidgetpath}/Configuration/columns/#width) is specified, this column will be hidden only if it does not fit into the [width of the widget]({basewidgetpath}/Configuration/#width).
3. If the width of a column is not specified, this column will be hidden only if its content overflows it.

#####See Also#####
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
<!--/fullDescription-->
