<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'hide' | 'stack'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the chart must behave when [series point labels](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Point_Labels) overlap.
<!--/shortDescription-->

<!--fullDescription-->
Series point labels display series point values. If your chart contains several series with a large number of points in each, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically. If labels that overlap belong to series points that have the same argument, you can arrange these labels in a stack. For this purpose, set the **resolveLabelOverlapping** option to *'stack'*.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `ChartResolveLabelOverlapping` enum. This enum accepts the following values: `None`, `Hide` and `Stack`.
<!--/fullDescription-->