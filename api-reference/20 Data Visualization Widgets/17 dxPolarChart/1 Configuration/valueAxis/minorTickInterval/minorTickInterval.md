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
Specifies the interval between [minor ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/).
<!--/shortDescription-->

<!--fullDescription-->
To divide a lengthy chart axis into shorter segments, major and minor ticks are used. [Major ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/tick/) are accompanied with [axis labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Labels). Between each pair of neighboring major ticks, several minor ticks reside. Minor ticks are required when major ticks are far from each other. To set a custom minor tick interval, use the **minorTickInterval** option. If this option is not set, minor ticks are arranged automatically.

In case your axis displays numbers, assign a numeric value to this option. If the axis displays dates, assign one of the predefined string values. To set the interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object must contain only one of the fields described in this section.

[note]The **minorTickInterval** option can be applied to a *[continuous](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#type)* axis only. For logarithmic axes, use the [minorTickCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#minorTickCount) option.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.
<!--/fullDescription-->