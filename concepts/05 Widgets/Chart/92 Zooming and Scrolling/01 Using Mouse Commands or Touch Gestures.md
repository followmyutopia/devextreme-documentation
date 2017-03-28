Mouse-equipped users zoom the chart by rotating the mouse wheel and scroll it by dragging the chart's plot. Users with touch-enabled devices zoom the chart using the spread and pinch gestures, and scroll the chart using the drag gesture.

![DevExtreme HTML5 JavaScript Charts Zooming Scrolling](/Content/images/doc/17_1/ChartJS/devextreme-chart-NewZoomScroll.gif)

Zooming and scrolling are configured separately as well as their support for mouse commands and touch gestures. Use the [zoomingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) and [scrollingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) options to specify whether a user can zoom and scroll the chart using mouse commands, touch gestures, or both. 

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
            zoomingMode: "all",  // or "touch" | "mouse" | "none"
            scrollingMode: "all" // or "touch" | "mouse" | "none"
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Set the Initial Zoom](/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Set_the_Initial_Zoom)
