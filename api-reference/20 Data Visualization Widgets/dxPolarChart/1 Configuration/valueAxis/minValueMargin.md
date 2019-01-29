===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a coefficient that determines the spacing between the minimum series point and the axis.
<!--/shortDescription-->

<!--fullDescription-->
When [margins are enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueMarginsEnabled) in a chart, an axis extends slightly beyond its start and end values. It is required for preventing the cutting off of parts of the minimum and maximum series points.

By default, margins are calculated automatically and equal to half of an axis' [tick interval](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Axis_Ticks_Arrangement). If you need to specify custom margins, use the **minValueMargin** and **maxValueMargin** options. These options accept coefficients that are used to calculate the actual start and end values for an axis with applied margin susing the following formulas:

    startAxisValue = minDataValue - (maxDataValue - minDataValue) * minValueMargin
    endAxisValue = maxDataValue + (maxDataValue - minDataValue) * maxValueMargin

For example, consider that `minDataValue` is 1960 and `maxDataValue` is 2010. If you set the **minValueMargin** and **maxValueMargin** options to 0.1, the axis will start in 1955 and end in 2015.

    startAxisValue = 1960 - (2010 - 1960) * 0.1 = 1960 - 50 * 0.1 = 1960 - 5 = 1955
    endAxisValue = 2010 + (2010 - 1960) * 0.1 = 2010 + 50 * 0.1 = 2010 + 5 = 2015

![MinValueMargin ChartJS](/Content/images/doc/19_1/ChartJS/PolarValueMargins.png)

[note]Margins can be added to axes of the continuous or logarithmic type only.
<!--/fullDescription-->