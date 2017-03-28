The scrollbar is a chart element used for scrolling.

![DevExtreme HTML5 JavaScript Charts ScrollBar](/Content/images/doc/16_2/ChartJS/visual_elements/scroll_bar.png)

You can configure the scrollbar using the [scrollBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/) object. To display the scrollbar, set the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible) option of this object to *true*, but before doing this, make sure to enable [scrolling](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) and [zooming](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) in the **Chart**. Otherwise, the scrollbar will be inoperative.

	<!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
			// ...
            zoomingMode: "all",
            scrollingMode: "all",
            scrollBar: {
                visible: true,
                //...
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Set the Initial Zoom](/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Set_the_Initial_Zoom)
