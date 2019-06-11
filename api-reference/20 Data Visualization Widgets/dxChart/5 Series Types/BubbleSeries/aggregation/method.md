<!--id-->dxChartSeriesTypes.BubbleSeries.aggregation.method<!--/id-->
===========================================================================
<!--default-->'avg'<!--/default-->
<!--acceptValues-->'avg' | 'custom'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to aggregate series points. 
<!--/shortDescription-->

<!--fullDescription-->
Series points get aggregated by individual [aggregation intervals](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/). The following list describes aggregation methods available for series of the **Bubble** type:

- *"avg"*       
Calculates the average of all point values in an interval.

- *"custom"*        
Applies a custom aggregate function specified in the [calculate](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate) option. 

#include common-ref-enum with {
    enum: "`ChartSeriesSelectionrMode`",
    values: "`Avg` and `Custom`"
} Note that although this enum accepts more values, only these can be applied to a **Bubble** series.

#####See Also#####
- [Data Aggregation](/Documentation/Guide/Widgets/Chart/Data_Aggregation/)
<!--/fullDescription-->