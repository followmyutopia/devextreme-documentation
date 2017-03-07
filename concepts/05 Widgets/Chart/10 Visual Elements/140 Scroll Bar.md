In case the chart is wide, you can make it scrollable by enabling [scrolling](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) and [zooming](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode). When these features are enabled, it is convenient to use a scroll bar to visualize the current view area on an entire chart and to scroll quickly.

![Scroll Bar](/Content/images/doc/16_2/ChartJS/Chart_ScrollBar.png)

Before displaying the scroll bar, make sure that [scrolling](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) and [zooming](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) features are enabled,  otherwise the scroll bar will not be operational. 

The scroll bar is configured using the [scrollBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/) object.

	<!--JavaScript-->var chartOptions = {
        // ...
		scrollBar: {
			//...
		}
	};


The following list provides an overview of scroll bar options.

* **Visibility**	
To display the scroll bar, set the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible) option to *true*. 

* **Position**	
To customize the scroll bar position, use the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#position) and [offset](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#offset) options. 

* **Appearance**	
If you need to adjust the scroll bar's appearance customization, use the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#color), [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#opacity) and [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#width) options.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>