For charting, the rectangular coordinate system is used to determine each point uniquely on a plane through two numbers, the argument and the value of a point. To define the coordinates, two perpendicular directed lines - the _axes_ - are specified: the axis of arguments and the axis of values.

![Axes](/Content/images/doc/16_1/ChartJS/Axes.png)

Depending on the specified data, the axes can be discrete, continuous or logarithmic. For details, refer to the [Argument Axis](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axes/Argument_Axis) and [Value Axis](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axes/Value_Axis) topics.

Axis ticks/grid lines are arranged automatically by default based on chart data source values. However, you can rearrange them the way you like. For details, refer to the [Set a Category Order](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axes/Set_a_Category_Order) and [Axis Ticks Arrangement](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axes/Axis_Ticks_Arrangement) topics.

Axis options can be set using the chart's [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/) and [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/) configuration objects. If you need to set the same values for all axes, use the [commonAxisSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/) configuration object.

	<!--JavaScript-->var chartOptions = {
        // ...
		commonAxisSettings: {
			//...
		},
		valueAxis: {
			//...
		},
		argumentAxis: {
			//...
		}
	};

[note]If you have set an option within the **valueAxis** or **argumentAxis** configuration object, it will override the common value that is set using the **commonAxisSettings** object.

If you use several [panes](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Panes) to display series or use multiple value axes on one pane, you should define several value axes. In this instance, **valueAxis** should be an array of objects defining value axes. In addition, you can specify different argument axes for each pane. In this instance, **argumentAxis** should be an array of objects defining argument axis for each pane. The following code demonstrates this.

	<!--JavaScript-->var chartOptions = {
        // ...
		commonAxisSettings: {
			//...
		},
		valueAxis: [
			{ pane: 'bottomPane', name: 'firstAxis' },
			{ pane: 'bottomPane', name: 'secondAxis' },
			{ pane: 'topPane' }
		],
		argumentAxis:  [
			{ pane: 'bottomPane' },
			{ pane: 'topPane' }
		]
	};

In the code above, the **commonAxisSettings** object defines common settings of all axes in all panes.

The following list overviews the common axis options.

* **Visibility**		
To make axes visible/invisible, use the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#visible) property of the **commonAxisSettings** object.

* **Position**		
It is possible to swap the axes positions. To display the argument axis vertically, and the value axis horizontally, assign *true* to the chart's [rotated](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated) property.

* **Appearance**		
You can change the color, width and opacity for the axes, using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#color), [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#width) and [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#opacity) properties.

The value and argument axes can be drawn with or without [titles](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axes_Titles), [ticks](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axis_Ticks), [grid lines](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Grid), [strips](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Strips) and [labels](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Axis_Labels).

![Axis Elements](/Content/images/doc/16_1/ChartJS/AxisElements.png)

To change the visibility of these elements and set their options, define the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/title/), [ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/tick/), [grid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/grid/), [strips](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/) and [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/label/) objects within the **commonAxisSettings**, **valueAxis** and/or **argumentAxis** configuration objects. For a detailed description of each element, refer to the corresponding document.