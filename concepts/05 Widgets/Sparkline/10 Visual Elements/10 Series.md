A series is a group of related data points. The most important characteristic of a series is its type, which determines a specific visual presentation of data. In this topic, you will learn how to set a series type and configure series settings.

![DevExtreme ChartJS Sparkline](/Content/images/doc/19_2/ChartJS/SparklineAllTypesWithCaptions.png)

To set the series type that best suits your needs, specify the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type) option of the main configuration object. By default, the [line](/Documentation/Guide/Widgets/Sparkline/Series_Types/#Line) series type is set.

	<!--JavaScript-->var sparklineOptions = {
		type: 'line',
		// ...
	};

Since sparklines are simple in nature, sparkline series offer few configuration options. The majority of series types, except [bar](/Documentation/Guide/Widgets/Sparkline/Series_Types/#Bar) and [win-loss](/Documentation/Guide/Widgets/Sparkline/Series_Types/#Win-Loss), have the [lineColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor) and [lineWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth) options to customize series' appearance. In turn, *bar* series have the [barPositiveColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#barPositiveColor) and [barNegativeColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#barNegativeColor) options, and *win-loss* series have [winColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#winColor) and [lossColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lossColor) options for the same purpose.

Series are constructed on the base of data that can be provided using many different approaches. To review them all, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) guide.

To learn more about series types featured in the **Sparkline** widget, refer to the [Sparkline Series Types](/Documentation/Guide/Widgets/Sparkline/Series_Types/#Sparkline_Series_Types) guide.
