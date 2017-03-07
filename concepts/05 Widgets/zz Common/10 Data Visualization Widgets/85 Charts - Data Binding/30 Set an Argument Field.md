After you have bound data to your widget, you need to specify which fields of a data source object must be used to provide arguments and values for chart points. To specify the argument field name, assign it to the **argumentField** option. This option can be specified differently depending on the widget you use.

* **Chart**		
Usually, **Chart** contains several series that have the same argument field. You can specify the argument field for all these series at once within the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object.

		<!--JavaScript-->var chartOptions = {
			//...
			commonSeriesSettings: {
				argumentField: 'year'
			}
		};

	Similarly, you can specify the **argumentField** option within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object in case you have only one series in your chart.

		<!--JavaScript-->var chartOptions = {
			//...
			series: {
				argumentField: 'year',
				// ...
			}
		};

	In rare cases, you may need different argument fields for different series. Then, assign an array to the **series** option and specify the **argumentField** option in each object of this array.

		<!--JavaScript-->var chartOptions = {
			//...
			series: [{
				argumentField: 'year1990',
				// ...
			}, {
				argumentField: 'year2000',
				// ...
			}]
		};

* **PieChart**		
To specify an argument field for a series in the **PieChart** widget, set the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#argumentField) option within the **series** object.

		<!--JavaScript-->$("#pieChartContainer").dxPieChart({
			//...
			series: {
				argumentField: 'year',
				// ...
			}
		};

* **Sparkline**		
The [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#argumentField) option for the **Sparkline** widget must be specified in the root configuration object.

		<!--JavaScript-->$("#sparklineContainer").dxSparkline({
			//...
			argumentField: 'year'
		};

To finish setting up the minimal configuration for you widget, specify one or several value fields for your series. To learn how to do this, refer to the next topic.