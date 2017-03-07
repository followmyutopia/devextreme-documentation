Ticks divide an axis into sections by a step that is determined automatically, or by the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/) and [axisDivisionFactor](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#axisDivisionFactor) options of an axis. Ticks improve the comprehension of chart data. However, they are not visible by default in the **Chart** widget. Instead, [axis labels](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axis_Labels) and [grid lines](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Grid) represent axis division.

To make ticks visible, use the **visible** property of the [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/tick/) object within the **argumentAxis**, **valueAxis** or **commonAxisSettings** configuration object.

	<!--JavaScript-->var chartOptions = {
		commonAxisSettings: {
			tick: { visible: true }
		},
		//...
	};

![Axis Ticks](/Content/images/doc/16_1/ChartJS/Ticks.png)

In addition, you can change the default tick dimensions, color and opacity, using the [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/tick/#width), [length](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/tick/#length), [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/tick/#color) and [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/tick/#opacity) properties of the **tick** object.