<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->5<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Adds a pixel-measured empty space between two side-by-side value axes. Applies if several value axes are [located on one side](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#position) of the chart.
<!--/shortDescription-->

<!--fullDescription-->
The order of axes in the **valueAxis** array plays a significant role when you specify this option. When you need to add an empty space between two side-by-side axes, set the **multipleAxesSpacing** option for the axis declared last in the **valueAxis** array. For example, to add space between the second and the third axes, set the **multipleAxesSpacing** option for the third axis.

[note]Obviously, setting this option for the first axis takes no effect, because this axis is never the last one in any pair of axes.
<!--/fullDescription-->