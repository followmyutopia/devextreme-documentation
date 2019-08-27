---
id: dxChart.Options.commonSeriesSettings.type
acceptValues: 'area' | 'bar' | 'bubble' | 'candlestick' | 'fullstackedarea' | 'fullstackedbar' | 'fullstackedline' | 'fullstackedspline' | 'fullstackedsplinearea' | 'line' | 'rangearea' | 'rangebar' | 'scatter' | 'spline' | 'splinearea' | 'stackedarea' | 'stackedbar' | 'stackedline' | 'stackedspline' | 'stackedsplinearea' | 'steparea' | 'stepline' | 'stock'
type: String
default: 'line'
---
---
##### shortDescription
Specifies the type of the series.

---
The series type determines the distinctive look of the series. Depending on the nature of data, one series type may be preferable over another. To choose which series type serves your visualization purposes best, visit the [Series Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/) documentation section.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SeriesType` enum. This enum accepts the same values, but each word in them starts with an upper-case letter, for example, *'fullstackedsplinearea'* becomes `FullStackedSplineArea`.