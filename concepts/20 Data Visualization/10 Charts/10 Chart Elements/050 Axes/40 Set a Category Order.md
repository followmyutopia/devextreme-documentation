When specifying [data for a series](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/#Provide_Data) in a chart with a [discrete axis](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axes/Argument_Axis), the order of categories on this axis is determined by the order in the series defined first. You can set a specific order of the categories. For this purpose, use the axis' [categories](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories) property.

	<!--JavaScript-->var chartOptions = {
		argumentAxis: {
			categories: ['January', 'February', 'March']
		},
		//...
	};

The example below demonstrates the use of the **categories** property. Take a note of the following.

* Categories are ordered differently in the example data source. However, you can see that the specifically set order is used in the resulting chart.		
* The *"June"* category is not included in the **categories** array, but there is a value specified for this category in the first series. However, you can see that the *"June"* category is added in the resulting chart. That is because the "missed" categories are added to the end of the specified **categories** array.