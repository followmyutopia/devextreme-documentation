<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'<!--/acceptValues-->
<!--type-->number | object | string<!--/type-->
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies an interval between axis ticks/grid lines.
<!--/shortDescription-->

<!--fullDescription-->
Use this option to divide the scale by ticks in a specified interval one from another. If this option is not set, ticks are automatically arranged so that their labels do not overlap each other.

In case of a numeric axis, assign a numeric value to this option.

If the axis is of the date-time type, assign one of the predefined string values or an object to this option. The object's fields specify the number of days, hours, etc.

When you use a [logarithmic axis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#type), ticks are generated on a base of powers. For example, assume that the [logarithm base](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#logarithmBase) is 10. Then, if the tick interval is 1, ticks are generated at 0.01, 0.1, 1, 10, 100, 1000, 10000, etc. If the tick interval is 2, ticks are generated at 0.1, 10, 1000, etc.

To set the **tickInterval** option for several axes at once, use the [commonAxisSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/) configuration object. To set this option for an individual axis, use the **argumentAxis** or [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/) configuration object.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.
<!--/fullDescription-->