===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Enables auto-calculated scale breaks. Applies only if the axis' [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type) is *"continuous"* or *"logarithmic"*. Does not apply to a multi-axis chart.
<!--/shortDescription-->

<!--fullDescription-->
If this option is **true**, the widget detects large gaps between side-by-side points and cuts them out, putting scale breaks instead.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ScaleBreaks/jQuery/Light/"
}

#####See Also#####
- [maxAutoBreakCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#maxAutoBreakCount)
- [breaks[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/breaks/)
<!--/fullDescription-->