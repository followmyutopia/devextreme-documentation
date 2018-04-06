===========================================================================
<!--default-->'ohlc'<!--/default-->
<!--acceptValues-->'ohlc' | 'custom'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to aggregate series points. 
<!--/shortDescription-->

<!--fullDescription-->
Series points get aggregated by individual [aggregation intervals](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/). The following list describes aggregation methods available for series of the **Stock** type:

- *"ohlc"*      
Calculates the first open, last close, minimum low, and maximum high value in an interval.

- *"custom"*        
Applies a custom aggregate function specified in the [calculate](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate) option.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartSeriesAggregationMethod` enum with one of the following values: `Ohlc` and `Custom`. Note that although this enum accepts more values, only these can be applied to a **Stock** series.
<!--/fullDescription-->