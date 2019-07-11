<!--id-->dxRangeSelector.Options.chart.maxBubbleSize<!--/id-->
===========================================================================
<!--propertyOf-->dxChartSeriesTypes.BubbleSeries<!--/propertyOf-->
<!--default-->0.2<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a coefficient that determines the diameter of the largest bubble.
<!--/shortDescription-->

<!--fullDescription-->
When defining a bubble series, you specify a [size field](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/#sizeField). The largest size value is represented by the largest bubble. Its diameter is calculated as follows:

*d = maxBubbleSize \* min(chartHeight, chartWidth)*
<!--/fullDescription-->