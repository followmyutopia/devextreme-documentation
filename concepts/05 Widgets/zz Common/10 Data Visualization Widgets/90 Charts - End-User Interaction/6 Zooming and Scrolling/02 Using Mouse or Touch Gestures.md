The **Chart** widget allows you to enable built-in scrolling and zooming. You can use the mouse wheel or the "pinch" gesture for zooming and the horizontal slide gesture across the chart (using mouse or touch interface) for scrolling.

![DevExtreme ChartJS Zooming Scrolling](/Content/images/doc/19_2/ChartJS/devextreme-chart-NewZoomScroll.gif)

You can enable mouse support, touch support or both by assigning corresponding values to the [scrollingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) and/or [zoomingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) options.

	<!--JavaScript-->var chartOptions = {
		// ...
		scrollingMode: "all", // "touch", "mouse"
		zoomingMode: "all"    // "touch", "mouse"
	};

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/"
}
