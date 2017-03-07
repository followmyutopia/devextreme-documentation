When specifying [data for a series](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/#Provide_Data) in a chart with a [discrete axis](/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Axes/Argument_Axis), the order of categories on this axis is determined by the order in the series defined first. You can set a specific order of the categories. For this purpose, use the axis' [categories](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#categories) property.

	<!--JavaScript-->var polarChartOptions = {
		argumentAxis: {
			categories: ['January', 'February', 'March']
		},
		// ...
	};