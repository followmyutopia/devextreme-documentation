With the **Chart** widget, you have the capability to display series on separate panes. Panes are visual areas within a chart, inside which all the elements required to represent data are displayed. Visually, each pane looks like a separate chart with axes, axis labels and titles. However, panes have a common legend and chart title. A typical scenario where multiple panes are useful is when it is required to plot several chart series separately within the same chart. In this instance, these series are easily compared and provide an entire picture of the data. For more information on how to configure a multi-pane chart, refer to the [Create a Multi-Pane Chart](/Documentation/Tutorial/Data_Visualization/Create_a_Multi-Pane_Chart/) tutorial.

![Series](/Content/images/doc/16_2/ChartJS/Panes.png)

To define chart panes, use the [panes](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/) configuration object.

	<!--JavaScript-->var chartOptions = {
		panes: [
			{ name: 'topPane' },
			{ name: 'bottonPane' }
		],
		//...
	};

As you can see in the code above, you should set a name for each pane. You can then use this name as a pane identifier. In addition to the names, you can also set the following pane options.

* **Pane Border**		
You can make a border visible for a pane and specify its settings as required. For this purpose, define the [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/border/) object within the **pane** objects.

* **Background Color**		
To highlight panes, set a background color for them using the [backgroundColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/#backgroundColor) property.

If you need to specify similar options for all panes in a chart, use the [commonPaneSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonPaneSettings/) configuration object, as demonstrated below.

	<!--JavaScript-->var chartOptions = {
		commonPaneSettings: {
			border: { visible: true }
		},
		//...
	};

When defining a series, specify the pane in which it should be displayed. For this purpose, use the series' [pane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#pane) property. If there are several series using the same pane, you can declare this pane as the default pane, rather than specify it for each series. To do this, use the chart's [defaultPane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#defaultPane) property. The following code demonstrates how to do this.

	<!--JavaScript-->var chartOptions = {
		panes: [
			{ name: 'topPane' },
			{ name: 'bottonPane' }
		],
		defaultPane: 'topPane',
		series: [
			{ ... },
			{ ... },
			{ pane: 'bottomPane' }
		],
		//...
	};

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesmultipanes/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>