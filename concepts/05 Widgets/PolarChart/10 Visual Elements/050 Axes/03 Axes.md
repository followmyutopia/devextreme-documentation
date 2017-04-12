A coordinate system is used to determine each point uniquely on a plane through two numbers, the argument and the value of a point. To define the coordinates, two lines - the _axes_ - are specified: the axis of arguments and the axis of values. In the polar coordinates, the argument axis is the circle &#8212; different **arguments** have different angles (by default, the start angle is at the top, positive direction is clockwise). The value axis is vertical with the start point at the center of the circle by default. A point's **value** in polar coordinates is defined as a distance of the point from the center of the circle.

![Axes](/Content/images/doc/17_1/ChartJS/Polar_Axes.png)

Depending on the specified data, the axes can be discrete, continuous or logarithmic. For details, refer to the [Argument Axis](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Argument_Axis) and [Value Axis](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Value_Axis) topics.

[Axis ticks](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks)/[grid lines](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Grid) are arranged automatically by default based on chart data source values. However, you can rearrange them the way you like. For details, refer to the [Set a Category Order](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Set_a_Category_Order) and [Axis Ticks Arrangement](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Axis_Ticks_Arrangement) topics.

Axis options can be set using the chart's [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/) and [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/) configuration objects. If you need to set the same values for all axes, use the [commonAxisSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/) configuration object.

	<!--JavaScript-->var polarChartOptions = {
        // ...
		commonAxisSettings: {
			// ...
		},
		valueAxis: {
			// ...
		},
		argumentAxis: {
			// ...
		}
	};

[note]If you have set an option within the **valueAxis** or **argumentAxis** configuration object, it will override the common value that is set using the **commonAxisSettings** object.

The following list gives an overview of the common axis options.

* **Visibility**		
To make axes visible/invisible, use the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/#visible) property of the **commonAxisSettings** object.

* **Appearance**		
You can change the color, width and opacity for the axes, using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/#color), [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/#width) and [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/#opacity) properties.

The value and argument axes can be drawn with or without [labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Labels), [ticks](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks), [strips](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Strips) and [grid lines](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Grid).

![Axis Elements](/Content/images/doc/17_1/ChartJS/Polar_AxisElements.png)

To change the visibility of these elements and set their options, define [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/label/), [ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/), [strips](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/strips/) and [grid](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/grid/) objects within the **commonAxisSettings**, **valueAxis** and/or **argumentAxis** configuration objects. For a detailed description of each element, refer to the corresponding document.