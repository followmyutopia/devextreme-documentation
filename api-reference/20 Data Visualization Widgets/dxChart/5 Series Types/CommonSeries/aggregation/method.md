===========================================================================
<!--acceptValues-->'avg' | 'count' | 'max' | 'min' | 'ohlc' | 'range' | 'sum' | 'custom'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to aggregate series points. 
<!--/shortDescription-->

<!--fullDescription-->
Series points get aggregated by individual [aggregation intervals](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/). The following list describes available aggregation methods per series type:

- **[Line](/Documentation/Guide/Widgets/Chart/Series_Types/Line_Series/), [bar](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/), [area](/Documentation/Guide/Widgets/Chart/Series_Types/Area_Series/), and [Scatter](/Documentation/Guide/Widgets/Chart/Series_Types/Scatter_Series/) series:**     

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

- **[Bubble](/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/) series:**

    - *"avg"*       
    Calculates the average of all point values in an interval.

- **[Financial](/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/) series**:

    - *"ohlc"*      
    Calculates the first open, last close, minimum low, and maximum high value in an interval.

- **[Range](/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/) series**:

    - *"range"*         
    Calculates the range of values in an interval.

- **All series types**:

    - *"custom"*        
    Applies a custom aggregate function specified in the [calculate](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate) option. 

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartSeriesAggregationMethod` enum with one of the following values: `Avg`, `Count`, `Max`, `Min`, `Ohlc`, `Range`, `Sum`, and `Custom`.
<!--/fullDescription-->