===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'hide'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the chart must behave when [series point labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels) overlap.
<!--/shortDescription-->

<!--fullDescription-->
Series point labels display series point values. If your chart contains several series with a large number of points in each, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `PolarChartResolveLabelOverlapping` enum. This enum accepts the following values: `None` and `Hide`.
<!--/fullDescription-->