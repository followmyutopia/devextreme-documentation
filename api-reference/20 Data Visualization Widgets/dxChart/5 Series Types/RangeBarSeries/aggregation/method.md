===========================================================================
<!--default-->'range'<!--/default-->
<!--acceptValues-->'range' | 'custom'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to aggregate series points. 
<!--/shortDescription-->

<!--fullDescription-->
Series points get aggregated by individual [aggregation intervals](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/). The following list describes aggregation methods available for series of the **Range Area** type:

- *"range"*         
Calculates the range of values in an interval.

- *"custom"*        
Applies a custom aggregate function specified in the [calculate](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate) option.

#include common-ref-enum with {
    enum: "`ChartSeriesAggregationMethod`",
    values: "`Range` and `Custom`"
} Note that although this enum accepts more values, only these can be applied to a **Range Bar** series.

#####See Also#####
- [Data Aggregation](/Documentation/Guide/Widgets/Chart/Data_Aggregation/)
<!--/fullDescription-->