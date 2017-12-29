===========================================================================
<!--default-->'single'<!--/default-->
<!--acceptValues-->'single' | 'multiple'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a single series or multiple series can be selected in the chart.
<!--/shortDescription-->

<!--fullDescription-->
To set the series elements to highlight when a series is selected, set the series [selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#selectionMode) option.

To learn how to select a point, refer to the [Selection Handling](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Selection_Handling) topic.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartElementSelectionMode` enum. This enum accepts the following values: `Single` and `Multiple`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesmultipleseriesselection/"
}
<!--/fullDescription-->