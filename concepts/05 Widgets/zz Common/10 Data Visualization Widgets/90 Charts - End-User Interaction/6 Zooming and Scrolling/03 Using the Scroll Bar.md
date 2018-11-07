In addition to scrolling by mouse and touch gestures, you can display a separate visual element for scrolling called **scroll bar**.

![](/Content/images/doc/18_2/ChartJS/Chart_ScrollBar.png)

The scroll bar is configured using the [scrollBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/) object. Set the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible) field of this object to **true** to display the scroll bar.

[note] Before displaying the scroll bar, make sure that [scrolling](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) and [zooming](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) features are enabled, otherwise the scroll bar will not be operational.

	<!--JavaScript-->var chartOptions = {
		// ...
		scrollingMode: "all",
		zoomingMode: "all",

		scrollBar: {
			visible: true,
			//...
		}
	};

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/"
}

To learn more about the scroll bar as a visual element, refer to the **Chart Elements** | [Scroll Bar](/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/#Using_the_Scroll_Bar) topic.
