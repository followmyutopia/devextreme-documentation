===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'column' | 'row'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to summarize each next summary value with the previous one by rows or columns.
<!--/shortDescription-->

<!--fullDescription-->
After [aggregating](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType) and [post-processing](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode) stages, you can perform the last calculation on the resulting summary values &#8212; adding of each summary value to the previous one (starting from the second) by rows or columns. For example, if you have the following row values

    [2, 6, -3, 0, 8]

and the **runningTotal** option is set to 'row', the pivot grid will display the row as follows.

    [2, 8, 5, 5, 13]

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `PivotGridRunningTotalMode` enum. This enum accepts the following values: `Row` and `Column`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Pivot_Grid/RunningTotals/jQuery/Light/"
}
<!--/fullDescription-->