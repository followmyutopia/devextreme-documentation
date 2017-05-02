<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'hide' | 'shift'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how a chart must behave when [series point labels](/Documentation/Guide/Widgets/PieChart/Visual_Elements/#Series_Point_Labels) overlap.
<!--/shortDescription-->

<!--fullDescription-->
Series point labels display series point values. If the series in your pie chart contains a large number of points, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically. To resolve overlapping by shifting labels from their positions, set the **resolveLabelOverlapping** option to *'shift'*. In this case, it is recommended that you display label [connectors](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/connector/) so that pie segments are connected with their labels. If there is not enough space for all labels after they are shifted, labels with the smallest values will be hidden.

[note] If the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#position) option is set to *"inside"*, the *"shift"* mode in label overlapping is not available.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `PieChartResolveLabelOverlapping` enum. This enum accepts the following values: `None`, `Hide` and `Shift`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespiewithoverlappinglabels/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->