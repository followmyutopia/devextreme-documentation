Crosshair is a pointer, which is represented by two mutually-crossing lines stretched over the entire chart plot. The crosshair helps you identify the values of the series points more precisely. When the crosshair is enabled, its center snaps to hovered [points](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Points).

![Crosshair](/Content/images/doc/16_2/ChartJS/Chart_Crosshair.png)

To enable the crosshair, set the [enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#enabled) option within the [crosshair](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/) configuration object to *true*.

	<!--JavaScript-->var chartOptions = {
        // ...
		crosshair: {
			enabled: true
		}
	};

You can specify the crosshair appearance by changing options listed below.

* **Color**		
You can change the crosshair's [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#color), [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#opacity)

* **Line Style**		
You can change the line's [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#width) and [dashStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/#dashStyle) options.

* **Labels**		
Crosshair labels indicate the argument and the value of the [series point](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Points) that the crosshair pointer currently focuses on. Use the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/label/) object to configure the crosshair labels.

Each crosshair line can be configured individually by using the [horizontalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/) and [verticalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/) configuration objects, whose fields are the same as listed above, plus the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/#visible) field. Note that the values that are set for a specific line override common values.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturescrosshair/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>