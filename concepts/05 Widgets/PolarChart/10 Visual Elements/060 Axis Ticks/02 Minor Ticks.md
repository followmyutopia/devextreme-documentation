In addition to the [axis ticks](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks), the **PolarChart** widget provides the capability to draw minor ticks.  Minor ticks divide an axis segment that lies between two neighboring axis ticks. 

![Minor Ticks](/Content/images/doc/19_1/ChartJS/Polar_Minor_Ticks.png)

Argument axis' minor ticks are configured using the **argumentAxis**&nbsp;|&nbsp;[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/minorTick/) object, value axis' &#8212; the **valueAxis**&nbsp;|&nbsp;[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/minorTick/) object, and both are configured using the **commonAxisSettings**&nbsp;|&nbsp;[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/minorTick/) object.

You can display minor ticks by setting the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/minorTick/#visible) option to **true**. The minor ticks will be arranged automatically. You can affect the ticks arrangement using the [minorTickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/minorTickInterval/) or [minorTickCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#minorTickCount) options of corresponding axis.

	<!--JavaScript-->var polarChartOptions = {
		valueAxis: {
			minorTick: {
				// ...
			}
		},
		// ...
	};