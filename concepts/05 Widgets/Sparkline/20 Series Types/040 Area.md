An *area* series type sparkline is helpful when you need to emphasize a change in values. Data in this series type is presented by a broken line joining invisible points and a shaded area under this line.

![DevExtreme ChartJS Sparkline](/Content/images/doc/19_1/ChartJS/SparklineArea.png)

To specify the *area* series type, assign *'area'* to the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type) option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'area',
		// ...
	};

To change the color of an *area* sparkline, set the [lineColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor) option. Note that both the line and the area under it will be painted in this color, but the area will be more transparent. In addition, you can specify the width of the line using the [lineWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth) option.

Regular points cannot be displayed in an *area* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points) topic.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartssparklinessparklinesarea/"
}
