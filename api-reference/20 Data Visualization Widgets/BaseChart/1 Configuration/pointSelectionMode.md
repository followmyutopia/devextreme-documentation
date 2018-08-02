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

#include common-ref-enum with {
    enum: "`ChartElementSelectionMode`",
    values: "`Single` and `Multiple`"
}

#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Charts/MultiplePointSelection/jQuery/Light/",
    name: "Multiple Point Selection"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Charts/APISelectAPoint/jQuery/Light/",
    name: "API - Select a Point"
}
<!--/fullDescription-->