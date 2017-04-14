<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->50<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the minimum distance between two neighboring major ticks in pixels. Applies only to the axes of the *"continuous"* and *"logarithmic"* [types](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type).
<!--/shortDescription-->

<!--fullDescription-->
For axes displaying numbers, the distance between major ticks depends on two interconnected options: **axisDivisionFactor** and [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/). Consider that you have specified both these options. If the specified tick interval leads the pixel distance between two ticks to being less than the **axisDivisionFactor** value, this tick interval will be ignored.

Use the **axisDivisionFactor** option only if you need to set the distance between ticks not knowing the axis values. Otherwise, use the **tickInterval** option.
<!--/fullDescription-->