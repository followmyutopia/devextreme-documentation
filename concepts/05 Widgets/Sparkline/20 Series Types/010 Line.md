A *line* series type sparkline presents data as a line that connects invisible points. This series type is useful when you need to visualize a data trend of specific intervals.

![DevExtreme ChartJS Sparkline](/Content/images/doc/19_2/ChartJS/SparklineLine.png)

In the **Sparkline** widget, the *line* series type is used by default.  There may be times, however, when you will need to specify this series type explicitly. To do so, assign *'line'* to the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type) option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'line',
		// ...
	};

You can use the [lineColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor) and [lineWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth) options to customize the appearance of a *line* series.

Regular points cannot be displayed in a *line* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points) topic.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartssparklinessparklinesline/"
}
