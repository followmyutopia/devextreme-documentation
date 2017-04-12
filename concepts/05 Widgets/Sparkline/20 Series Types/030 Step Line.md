A *step line* series type sparkline presents data as a line that connects a set of invisible points by using horizontal and vertical lines. This resulting sparkline resembles a series of steps.

![DevExtreme ChartJS Sparkline](/Content/images/doc/17_1/ChartJS/SparklineStepLine.png)

To specify the *step line* series type, assign *'stepline'* to the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type) option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'stepline',
		// ...
	};

You can use the [lineColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor) and [lineWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth) options to customize the appearance of a *step line* series.

Regular points cannot be displayed in a *step line* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points) topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartssparklinessparklinesline/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>