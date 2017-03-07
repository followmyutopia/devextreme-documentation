In addition to the [grid lines](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Grid) built on [axis ticks](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axis_Ticks), the **Chart** widget provides the **minor grid** that is built on [minor ticks](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axis_Ticks/Minor_Ticks). The lines of the minor grid extend from the minor ticks throughout the entire chart's plot.

![Minor Grid](/Content/images/doc/16_2/ChartJS/Chart_Minor_Grid.png)

Vertical minor grid lines are configured using the **argumentAxis**&nbsp;|&nbsp;[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorGrid/) object, horizontal &#8212; the **valueAxis**&nbsp;|&nbsp;[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorGrid/) object, and both grid lines are configured using the **commonAxisSettings**&nbsp;|&nbsp;[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorGrid/) object. To display minor grid lines, set their [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorGrid/#visible) option to *true*. In addition, you can customize the appearance of minor grid lines by using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorGrid/#color), [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorGrid/#opacity) and [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorGrid/#width) options.

	<!--JavaScript-->var chartOptions = {
		valueAxis: {
			minorGrid: {
				//...
			}
		},
		//...
	};
