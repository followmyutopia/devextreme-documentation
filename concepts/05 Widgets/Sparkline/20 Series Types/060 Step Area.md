A *step area* series type sparkline presents data as a line of joined horizontal and vertical lines that connects a set of invisible points. This line, which resembles staircase steps, is complemented with a shaded area beneath it.

![DevExtreme ChartJS Sparkline](/Content/images/doc/19_2/ChartJS/SparklineStepArea.png)

To specify the *step area* series type, assign *'steparea'* to the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type) option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'steparea',
		// ...
	};

To change the color of a *step area* sparkline, set the [lineColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor) option. Note that both the line and the area under it will be painted in this color, but the area will be more transparent. In addition, you can specify the width of the line using the [lineWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth) option.

Regular points cannot be displayed in a *step area* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points) topic.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartssparklinessparklinesarea/"
}
