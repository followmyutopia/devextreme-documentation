===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'touch' | 'mouse' | 'all'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Enables zooming in your chart.
<!--/shortDescription-->

<!--fullDescription-->
This option allows you to control the zooming capability in your chart. By default, this capability is off. To make zooming available on touch-enabled devices only, assign *'touch'* to the **zoomingMode** option. In that case, a user will be able to zoom in/out of the chart using the spread/pinch gesture. If your chart is not supposed to be viewed on touch-enabled devices, but you still need zooming to be enabled, assign *'mouse'* to the **zoomingMode** option. In this case, a user will be able to zoom the chart by rolling the mouse wheel. To enable zooming for all devices, assign *'all'* to the **zoomingMode** option.

[note]In many cases, zooming is useless without scrolling, and vice versa. Hence, when enabling the zooming capability in your chart, consider [enabling the scrolling capability](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) as well.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartPointerType` enum. This enum accepts the following values: `Mouse`, `Touch`, `All` and `None`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/"
}

#####See Also#####
- [zoomArgument(startValue, endValue)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue) - zooms the chart in code.
- [adjustOnZoom](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#adjustOnZoom) - specifies whether or not to adjust the value axis when zooming the widget.
- [zoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart) - an event that fires when zooming or scrolling begins.
- [zoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomEnd) - an event that fires when zooming or scrolling ends.
<!--/fullDescription-->