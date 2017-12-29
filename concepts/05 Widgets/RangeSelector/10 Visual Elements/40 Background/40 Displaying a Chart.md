To display a chart in the **RangeSelector** background, provide data for it using the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSource) option. Next, specify the fields to be used as the argument and value fields. To do this, use the **argumentField** and **valueField** options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/#series) object. In case you have several chart series, their common settings can be specified within the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/#commonSeriesSettings) object.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		dataSource: [
			{ x: 10, y1: 0, y2: 10 },
			{ x: 15, y1: 6, y2: 12 },
			{ x: 20, y1: 8, y2: 15 },
			{ x: 30, y1: 10, y2: 10 },
			{ x: 50, y1: 16, y2: 5 }
		],
		chart: {
			commonSeriesSettings: {
				argumentField: 'x'
			},
			series: [
				{ valueField: 'y1' },
				{ valueField: 'y2' }
			]
		}
	};

Additionally, you can [set up a color](/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Background/Setting_Up_a_Color) for the range selector's background using the **background**.**color** option. In this case, a chart will be displayed on the background that will be painted in the specified color.

Besides displaying a chart in the background, the **RangeSelector** widget can be bound to the [Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/) widget in order to perform zooming and scrolling on the chart. Refer to the [End-User Interaction](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/) topic to learn more about these advanced features.

<a href="/Demos/WidgetsGallery/#demo/formsandmulti-purposerangeselectorrangeselectorchartonbackground/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Chart on Background Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Range_Selector/CustomizedChartOnBackground/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Customized Chart on Background Demo</a>

