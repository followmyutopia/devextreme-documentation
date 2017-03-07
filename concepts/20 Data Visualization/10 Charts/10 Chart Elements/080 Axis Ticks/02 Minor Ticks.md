In addition to the [axis ticks](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axis_Ticks), the **Chart** widget provides the capability to draw minor ticks.  Minor ticks divide an axis segment that lies between two neighboring axis ticks. 

![Minor Ticks](/Content/images/doc/16_1/ChartJS/Chart_Minor_Ticks.png)

Vertical axis' minor ticks are configured using the **argumentAxis**&nbsp;|&nbsp;[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/) object, horizontal &#8212; the **valueAxis**&nbsp;|&nbsp;[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/) object and both are configured using the **commonAxisSettings**&nbsp;|&nbsp;[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorTick/) object.

You can display minor ticks by setting the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorTick/#visible) option to *true*. The minor ticks will be arranged automatically. You can affect the ticks arrangement using the [minorTickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTickInterval/) or [minorTickCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minorTickCount) options of corresponding axis.

	<!--JavaScript-->var chartOptions = {
		valueAxis: {
			minorTick: {
				//...
			}
		},
		//...
	};