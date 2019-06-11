<!--id-->dxChart.Options.useAggregation<!--/id-->
<!--dep-->..\5 Series Types\CommonSeries\aggregation\enabled.md<!--/dep-->
===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not to filter the series points depending on their quantity.
<!--/shortDescription-->

<!--fullDescription-->
By default, a chart displays all series points. But there may be situations when displaying all the series points may affect chart performance. In this case, it is better to aggregate the series points rather than display all of them. For this purpose, set the **useAggregation** option to **true**. The aggregation is based on the [median filter](http://en.wikipedia.org/wiki/Median_filter) algorithm.
<!--/fullDescription-->