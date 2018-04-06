===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures data aggregation for the series.
<!--/shortDescription-->

<!--fullDescription-->
If the **Chart** contains many series points, displaying all of them may lower its performance. In this case, it is better to aggregate the series points, or replace a group of them with a single point. The group includes only those points that fall within the same interval on the argument axis. See [aggregationInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/) and [aggregationGroupWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#aggregationGroupWidth) for details on dividing the axis into intervals.

The **Chart** provides [several aggregation methods](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#method), which differ depending on the series type, and a capability to implement a [custom aggregate function](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate). To enable data aggregation for the series, set the **aggregation**.[enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#enabled) option to **true**.

#####See Also#####
- **Points Aggregation Demo**: [Milti-Series Chart](/Demos/WidgetsGallery/Demo/Charts/PointsAggregation/jQuery/Light/) | [Financial Chart](/Demos/WidgetsGallery/Demo/Charts/PointsAggregationFinancialChart/jQuery/Light/)
<!--/fullDescription-->