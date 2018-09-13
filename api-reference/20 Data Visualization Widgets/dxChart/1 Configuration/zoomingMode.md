===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'all' | 'mouse' | 'none' | 'touch'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Enables zooming in your chart.
<!--/shortDescription-->

<!--fullDescription-->
This option allows you to control the zooming capability in your chart. By default, this capability is off. To make zooming available on touch-enabled devices only, assign *'touch'* to the **zoomingMode** option. In that case, a user will be able to zoom in/out of the chart using the spread/pinch gesture. If your chart is not supposed to be viewed on touch-enabled devices, but you still need zooming to be enabled, assign *'mouse'* to the **zoomingMode** option. In this case, a user will be able to zoom the chart by rolling the mouse wheel. To enable zooming for all devices, assign *'all'* to the **zoomingMode** option.

[note]In many cases, zooming is useless without scrolling, and vice versa. Hence, when enabling the zooming capability in your chart, consider [enabling the scrolling capability](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) as well.

#include common-ref-enum with {
    enum: "`ChartPointerType`",
    values: "`Mouse`, `Touch`, `All`, and `None`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/"
}

#####See Also#####
- **argumentAxis**.[visualRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/) | **valueAxis**.[visualRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange/)
- **Axis**.[visualRange(visualRange)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRangevisualRange)
- [onZoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart) | [onZoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd)
<!--/fullDescription-->