<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if [allowColumnResizing]({basewidgetpath}/Configuration/#allowColumnResizing) is **true** and [columnResizingMode]({basewidgetpath}/Configuration/#columnResizingMode) is *"widget"*.
<!--/shortDescription-->

<!--fullDescription-->
This option set to **true** makes the widget hide certain columns automatically if all the columns do not fit the widget's width. Columns with low [hidingPriority]({basewidgetpath}/Configuration/columns/#hidingPriority) are hidden first. These are the rightmost (leftmost if [rtlEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rtlEnabled) is **true**) columns by default. Information from hidden columns is available in an adaptive detail row.

#####See Also#####
- [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)
<!--/fullDescription-->