A series represents a group of related data points. The most important characteristic of a series is its type, which determines a particular visual representation of data. You can find more details on each series type in the corresponding topics of the [PolarChart Series Types](/Documentation/Guide/Widgets/PolarChart/Series_Types/) section. Here, you will learn how to set a series type and other series options.

![Series](/Content/images/doc/19_1/ChartJS/Polar_Series.png)

To set a series type, use the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#type) property of the **series** configuration object.

	<!--JavaScript-->var polarChartOptions = {
        // ...
		series: {
			type: 'line'
		}
	};

To set data for a series, there are several approaches. You can set a common data source for all series or specify data for each series individually. For details, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) section.

There can be several series displayed in the polar chart. In this instance, **series** is an array of series objects. You can specify series settings in the following three layers.

* **Common Series Settings**		
To set a particular option to a common value for each series, use the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/) configuration object.

		<!--JavaScript-->var polarChartOptions = {
            // ...
			commonSeriesSettings: {
				type: 'line'
			}
		};

* **Common Type-Specific Series Settings**		
	To set a particular option to a common value for each series of a certain type, use the corresponding type-specific configuration object within the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/) configuration object. There are type-specific configuration objects for all series types: [area](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/AreaSeries/), [line](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/), etc.

		<!--JavaScript-->var polarChartOptions = {
            // ...
			commonSeriesSettings: {
				area: {
					color: 'LightSkyBlue'
				}
			}
		};

	Note that the series values that are set for a specific series type override common values.

* **Individual Series Settings**		
	To set series options to individual values, use the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) array. The array items represent objects defining each series separately.

		<!--JavaScript-->var polarChartOptions = {
            // ...
			series: [
				{ type: 'line' },
				{ type: 'bar' }
			]
		};

	Note that values set individually override the common and type-specific values.

To identify series on the polar chart's [legend](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Legend), set a name for each series, using its [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#name) property.

	<!--JavaScript-->var polarChartOptions = {
		series: [
			{ name: 'Men' },
            { name: 'Women' }
		]
	};

In addition to series options, the **series** configuration object is used to set options of the series [points](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points) and [labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels).

	<!--JavaScript-->var polarChartOptions = {
        // ...
		series: {
			point: { visible: true },
			label: { visible: true }
		}
	};