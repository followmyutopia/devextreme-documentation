===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to adjust the value axis's [visualRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange/) when the [argument axis](/Documentation/Guide/Widgets/Chart/Axes/Overview/) is being [zoomed or scrolled](/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/).
<!--/shortDescription-->

<!--fullDescription-->
When a user zooms or scrolls the argument axis, the range of displayed [series](/Documentation/Guide/Widgets/Chart/Series/Overview/) values changes accordingly. To display this entire range without unused space on the value axis, the value axis's visual range gets widened or narrowed.

Set this option to **false** if the visual range should be constant and equal to the series values' maximum range.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/jQuery/Light/"
}

#####See Also#####
- [zoomingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) | [scrollingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode)
<!--/fullDescription-->