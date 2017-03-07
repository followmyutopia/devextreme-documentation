<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Width of cell is calculated from internal content<!--/d-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not the width of grid columns depends on column content.
<!--/shortDescription-->

<!--fullDescription-->
When this option is set to *true*, each grid column has a width that is optimal for holding the content of this column. In this case, the width of the widget's container is ignored. This setting may cause the appearance of [horizontal scrolling](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Navigation/#Scrolling/Horizontal_Scrolling), but only if the content of a row exceeds the width of the widget's container. In this scenario, consider enabling [column fixing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/).

When this option is set to *false*, all grid columns have the same width, which is calculated using the width of the widget's container.

If grid columns contain text, then this text can be wrapped if column width is exceeded. To enable word wrapping, set *true* to the [wordWrapEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#wordWrapEnabled) option.
<!--/fullDescription-->