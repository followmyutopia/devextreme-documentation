In addition to the [grid lines](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Grid) built on [axis ticks](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks), the **PolarChart** widget provides the **minor grid** that is built on [minor ticks](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks/Minor_Ticks). The lines of the minor grid extend from the minor ticks throughout the entire chart's plot.

![Minor Grid](/Content/images/doc/17_2/ChartJS/Polar_Minor_Grid.png)

Argument axis minor grid lines are configured using the **argumentAxis**&nbsp;|&nbsp;[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/minorGrid/) object, value axis minor grid lines &#8212; the **valueAxis**&nbsp;|&nbsp;[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/minorGrid/) object, and both grid lines are configured using the **commonAxisSettings**&nbsp;|&nbsp;[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/minorGrid/) object. You can customize the appearance of minor grid lines by using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/minorGrid/#color), [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/minorGrid/#opacity) and [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/minorGrid/#width) options. To hide minor grid lines, set their [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/minorGrid/#visible) option to **false**.

	<!--JavaScript-->var polarChartOptions = {
		valueAxis: {
			minorGrid: {
				//...
			}
		},
		//...
	};
