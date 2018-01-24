===========================================================================
<!--default-->'single'<!--/default-->
<!--acceptValues-->'multiple' | 'single'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a single point or multiple points can be selected in the chart.
<!--/shortDescription-->

<!--fullDescription-->
To set the points to highlight along with the selected point, set the **series**.**point**.[selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/#selectionMode) option.

To learn how to select a point, refer to the [Selection Handling](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Selection_Handling) topic.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartElementSelectionMode` enum. This enum accepts the following values: `Single` and `Multiple`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesmiltiplepointselection/"
}
<!--/fullDescription-->