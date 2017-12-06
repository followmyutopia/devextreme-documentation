===========================================================================
<!--default-->'line'<!--/default-->
<!--acceptValues-->'line' | 'stackedline' | 'fullstackedline' | 'area' | 'stackedarea' | 'fullstackedarea' | 'bar' | 'stackedbar' | 'fullstackedbar' | 'spline' | 'splinearea' | 'scatter' | 'candlestick' | 'stock' | 'rangearea' | 'rangebar' | 'stepline' | 'steparea' | 'bubble' | 'fullstackedspline' | 'stackedspline' | 'stackedsplinearea' | 'fullstackedsplinearea'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Sets the series type.
<!--/shortDescription-->

<!--fullDescription-->
The series type determines the distinctive look of the series. Depending on the nature of data, one series type may be preferable over another. To choose which series type serves your visualization purposes best, visit the [Series Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/) documentation section.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SeriesType` enum. This enum accepts the same values, but each word in them starts with an upper-case letter, for example, *'fullstackedsplinearea'* becomes `FullStackedSplineArea`.
<!--/fullDescription-->