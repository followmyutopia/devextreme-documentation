A *spline* series type sparkline presents data as a set of invisible points that are joined using a spline interpolation. This series type is suitable when you need to visualize a trend in data over intervals, but prefer joining lines to be smooth, in contrast to the [line](/Documentation/Guide/Widgets/Sparkline/Series_Types/#Line) series type.

![DevExtreme ChartJS Sparkline](/Content/images/doc/19_1/ChartJS/SparklineSpline.png)

To specify the *spline* series type, assign *'spline'* to the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type) option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'spline',
		// ...
	};

You can use the [lineColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor) and [lineWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth) options to customize the appearance of a *spline* series.

Regular points cannot be displayed in a *spline* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points) topic.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartssparklinessparklinesline/"
}
