<!--id-->dxPolarChart.Options.valueAxis.tickInterval<!--/id-->
===========================================================================
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies an interval between axis ticks/grid lines.
<!--/shortDescription-->

<!--fullDescription-->
Use this option to divide the scale by ticks in a specified interval from each other. If this option is not set, ticks are automatically arranged so that their labels do not overlap each other.

In case of a continuous or a logarithmic axis, assign a numeric value to this option.

If the axis is of the date-time type, assign one of the predefined string values or an object to this option. The object's fields specify the number of days, hours etc.

When you use a [logarithmic axis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#type), ticks are generated on a base of powers. For example, assume that the [logarithm base](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#logarithmBase) is 10. Then, if the tick interval is 1, ticks are generated at 0.01, 0.1, 1, 10, 100, 1000, 10000, etc. If the tick interval is 2, ticks are generated at 0.1, 10, 1000, etc.

To set the **tickInterval** option for several axis at once, use the [commonAxisSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/) configuration object. To set this option for an individual axis, use the [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/) or **valueAxis** configuration object.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.
<!--/fullDescription-->