===========================================================================
<!--default-->'includePoints'<!--/default-->
<!--acceptValues-->'excludePoints' | 'includePoints' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies what series elements to highlight when a corresponding item in the legend is hovered over.
<!--/shortDescription-->

<!--fullDescription-->
In the **PolarChart** widget, legend items represent series. When a legend item is hovered over, the corresponding series is highlighted. To prevent this behavior, set the **hoverMode** property to _'none'_.

You can set a custom 'hover' style for a series and/or its points. To do this, use the series' [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/hoverStyle/) configuration object and/or the **point**.[hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/hoverStyle/) configuration object.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartLegendHoverMode` enum. This enum accepts the following values: `IncludePoints`, `ExcludePoints` and `None`.
<!--/fullDescription-->