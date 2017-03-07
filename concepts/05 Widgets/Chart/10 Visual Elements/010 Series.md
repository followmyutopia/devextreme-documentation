A series represents a group of related data points. The most important characteristic of a series is its type, which determines a particular visual representation of data. You can find more details on each series type in the corresponding topics of the [Chart Series Types](/Documentation/Guide/Widgets/Chart/Series_Types/) section. Here, you will learn how to set a series type and other series options.

![Series](/Content/images/doc/16_2/ChartJS/Series.png)

To set a series type, use the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) property of the **series** configuration object.

	<!--JavaScript-->var chartOptions = {
        // ...
		series: {
			type: 'line'
		}
	};

To set data for a series, there are several approaches. You can set a common data source for all series or specify data for each series individually. For details, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) section.

There can be several series displayed in the chart. In this instance, **series** is an array of series objects. You can specify series settings in the following three layers.

* **Common Series Settings**		
To set a particular option to a common value for each series, use the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) configuration object.

		<!--JavaScript-->var chartOptions = {
            // ...
			commonSeriesSettings: {
				type: 'line'
			}
		};

* **Common Type-Specific Series Settings**		
	To set a particular option to a common value for each series of a certain type, use the corresponding type-specific configuration object within the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) configuration object. There are type-specific configuration objects for all series types: [area](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/AreaSeries/), [line](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/LineSeries/), etc.

		<!--JavaScript-->var chartOptions = {
            // ...
			commonSeriesSettings: {
				area: {
					color: 'LightSkyBlue'
				}
			}
		};

	Note that the series values that are set for a specific series type override common values.

* **Individual Series Settings**		
	To set series options to individual values, use the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array. The array items represent objects defining each series separately.

		<!--JavaScript-->var chartOptions = {
            // ...
			series: [
				{ type: 'line' },
				{ type: 'bar' }
			]
		};

	Note that values set individually override the common and type-specific values.

To identify series on the chart's [legend](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Legend), set a name for each series, using its [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name) property.

	<!--JavaScript-->var chartOptions = {
        // ...
		series: [
			{ name: 'Men' },
            { name: 'Women' }
		]
	};

By default, all specified series are displayed on the same [pane](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Panes). However, you can distribute your series as required between several panes. For this purpose, define the panes and specify the [pane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#pane) property for each series.

	<!--JavaScript-->var chartOptions = {
        // ...
		panes: [
			{ name: 'topPane' },
			{ name: 'bottomPane' }
		],
		series: [
			{ type: 'line', pane: 'topPane' },
			{ type: 'bar', pane: 'bottomPane' }
		]
	};

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultiplePanes/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

To see an example of a multi-pane chart, refer to the [Create a Multi-Pane Chart](/Documentation/Tutorial/Data_Visualization/Create_a_Multi-Pane_Chart/#Create_a_Multi-Pane_Chart) tutorial.

All specified series use the same value axis by default. However, you can plot series with different value axes in one pane as well. For this purpose, define the value axes and specify the [axis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#axis) property for each series.

	<!--JavaScript-->var chartOptions = {
        // ...
		valueAxis: [
			{ name: 'mainAxis' },
			{ name: 'secondaryAxis' }
		],
		series: [
			{ type: 'line', axis: 'mainAxis' },
			{ type: 'bar', axis: 'secondaryAxis' }
		]
	};

To see an example of a multi-axis chart, refer to the [Create a Multi-Axis Chart](/Documentation/Tutorial/Data_Visualization/Create_a_Multi-Axis_Chart/) tutorial.

In addition to series options, the **series** configuration object is also used to set options of the series [points](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Points) and [labels](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Point_Labels).

	<!--JavaScript-->var chartOptions = {
        // ...
		series: {
			point: { visible: true },
			label: { visible: true }
		}
	};