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
Specifies a coefficient that determines the spacing between the maximum series point and the axis.
<!--/shortDescription-->

<!--fullDescription-->
When [margins are enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueMarginsEnabled) in a chart, the value axis extends slightly beyond its start and end values. It is required for preventing the cutting off of parts of the minimum and maximum series points.

By default, margins are calculated automatically and equal to half of an axis' [tick interval](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Axis_Ticks_Arrangement). If you need to specify custom margins, use the **minValueMargin** and **maxValueMargin** options. These options accept coefficients that are used to calculate the actual start and end values for an axis with applied margins. The end value is calculated using the following formula.

*endValue = max + (max - min) * **maxValueMargin***    

For example, consider that *min* is 1960 and *max* is 2010. If you set the **maxValueMargin** option to 0.1, the axis will end in 2015.

*endValue = 2010 + (2010 - 1960) * 0.1 = 2010 + 50 * 0.1 = 2010 + 5 = 2015*

![Value Margins ChartJS](/Content/images/doc/17_1/ChartJS/PolarValueMargins.png)

To discover how the axis' start value is calculated, refer to the **minValueMargin** option description.

[note]Margins can be added to axes of the continuous or logarithmic type only.
<!--/fullDescription-->