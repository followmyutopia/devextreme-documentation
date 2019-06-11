<!--id-->dxChart.Options.resolveLabelOverlapping<!--/id-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'hide' | 'none' | 'stack'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the chart must behave when [series point labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/) overlap.
<!--/shortDescription-->

<!--fullDescription-->
Series point labels display series point values. If your chart contains several series with a large number of points in each, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically. If labels that overlap belong to series points that have the same argument, you can arrange these labels in a stack. For this purpose, set the **resolveLabelOverlapping** option to *'stack'*.

#include common-ref-enum with {
    enum: "`ChartResolveLabelOverlapping`",
    values: "`None`, `Hide`, and `Stack`"
}
<!--/fullDescription-->