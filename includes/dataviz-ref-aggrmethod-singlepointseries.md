Series points get aggregated by individual [aggregation intervals](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/). The following list describes aggregation methods available for series of the **{seriesType}** type:

- *"avg"*       
Calculates the average of all point values in an interval.

- *"count"*     
Calculates the number of points in an interval.

- *"max"*       
Calculates the maximum point value in an interval.

- *"min"*       
Calculates the minimum point value in an interval.

- *"sum"*       
Calculates the sum of all point values in an interval.

- *"custom"*        
Applies a custom aggregate function specified in the [calculate](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate) option. 

Use the `ChartSeriesAggregationMethod` enum to specify this option when the widget is used as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/). This enum accepts the following values: `Avg`, `Count`, `Max`, `Min`, `Sum`, and `Custom`. Note that although this enum accepts more values, only these can be applied to a **{seriesType}** series.

#####See Also#####
- [Data Aggregation](/Documentation/Guide/Widgets/Chart/Data_Aggregation/)