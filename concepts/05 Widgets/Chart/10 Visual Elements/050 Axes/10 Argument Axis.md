﻿Since a point is set up by two coordinates - an argument and a value - there should be two axes: one defining arguments and one defining values. This topic describes the axis for arguments, which is called the _argument axis_. To learn about the axis of values, refer to the [Value Axis](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Value_Axis) topic. To get common information on the **Chart** widget's axes, refer to the [Axes](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes) topic.

There are three types of argument axes.

* **Discrete**		
Contains a finite number of values, each of which represents an argument of a particular series point. These values are called _categories_ and arranged in a certain order.

* **Continuous**	
Contains an infinite number of values, some of which represent series point arguments.

* **Logarithmic**		
Contains an infinite number of values, each of which represents a number (logarithm base) raised to a power.

If arguments in the series' data source represent strings, a _discrete_ axis is created. The axis' categories are ordered as they are listed in the data source. The following example demonstrates this.

	<!--JavaScript-->var dataSource = [
		{ month: 'January', Glendale: 58, Kirkland: 42 },
		{ month: 'April', Glendale: 64, Kirkland: 51 },
		{ month: 'September', Glendale: 73, Kirkland: 62 },
		...
	];

![Discrete Argument Axis](/Content/images/doc/16_2/ChartJS/DiscreteArgumentAxis.png)

You can set a specific order for categories. For this purpose, use the [categories](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories) property of the **argumentAxis** configuration object. For details, refer to the [Set a Category Order](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Set_a_Category_Order) topic.

If arguments in the series' data source are numeric or date-time values, a _continuous_ axis is created. The axis ticks/grid lines are arranged so that the axis labels do not overlap each other. The following example demonstrates this.

	<!--JavaScript-->var dataSource = [
		{ temperature: 14.2, sales: 215 },
		{ temperature: 16.4, sales: 325 },
		{ temperature: 11.9, sales: 185 }
	];

![Continuous Argument Axis](/Content/images/doc/16_2/ChartJS/ContinuousArgumentAxis.png)

In addition to discrete and continuous types, you can use the _logarithmic_ axis type. This type can be used with numeric data source values only. Each value on the logarithmic argument axis represents a number (logarithm base) raised to a power. This number is specified by the [logarithmBase](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase) option. The logarithmic axis is useful when you visualize a huge range of data.

![Logarithmic Argument Axis](/Content/images/doc/16_2/ChartJS/LogarithmicArgumentAxis.png)

You can change the default ticks/grid lines arrangement on a continuous or a logarithmic axis. There are two ways of arranging ticks/grid lines manually. They are described in the [Axis Ticks Arrangement](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Axis_Ticks_Arrangement) topic.

If you need to create a _discrete_ axis for your numeric or date-time arguments, set the argument axis' [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type) property to *'discrete'*, as shown below.

	<!--JavaScript-->var chartOptions = {
        //...
		argumentAxis: {
			type: 'discrete'
		}
	};

In some scenarios, you may require that the type of arguments specified in the data source is treated as another type. For instance, the data source argument field may come with string values representing dates. In this instance, specify the desired type for the arguments using the argument axis' [argumentType](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType) property.

	<!--JavaScript-->var chartOptions = {
        //...
		argumentAxis: {
			argumentType: 'datetime'
		}
	};

As you can see in the code above, the **argumentAxis** object is used to set custom values for argument axis options. Note that **argumentAxis** can be an array, if series are displayed on several [panes](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Panes), and there should be a specific argument axis for each pane.

The following list is an overview of the argument axis options.

* **Visibility**		
To make the argument axis visible/invisible, use the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#visible) property of the **argumentAxis** configuration object.

* **Position**		
To set the argument axis at the top, set its [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#position) property to *'top'*.

* **Appearance**		
You can change the axis color, width and opacity, using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#color), [width](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#width) and [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#opacity) properties.

* **Discrete Axis Ticks Arrangement**		
Ticks and grid lines on a discrete axis can be displayed between series points (appropriate for bar series) or across them (appropriate for line series). To choose the mode that is more appropriate for your series type, use the [discreteAxisDivisionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#discreteAxisDivisionMode) property of the **argumentAxis** configuration object. In addition, you can set whether to insert an indent from the axes cross (appropriate for bar series) or start categories at the axes cross directly (appropriate for area series). To set an appropriate variant, use the [valueMarginsEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#valueMarginsEnabled) property.

* **Continuous Axis Ticks Arrangement**		
You can set whether to display series with indents from argument axis boundaries, or start and end the series at the axis' boundaries. To set an appropriate variant, use the [valueMarginsEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#valueMarginsEnabled) property. If you insert indents, set values for the [minValueMargin](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minValueMargin) and [maxValueMargin](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#maxValueMargin) properties. In addition, you can improve the tick arrangement for a date-time axis by setting them at the beginning of each unit interval (e.g., 09/01, 10/01, ... instead of 09/13, 10/13, ...). For this purpose, use the axis' [setTicksAtUnitBeginning](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#setTicksAtUnitBeginning) property.

* **Logarithmic Axis Ticks Arrangement**		
You can specify the logarithm base to be used in tick calculation using the [logarithmBase](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase) option.

* **Invert Axis**		
You can invert axis coordinates by setting the [inverted](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#inverted) property to _true_.

Use the **argumentAxis** configuration object to define the following axis child elements: [title](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes_Titles), [ticks](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axis_Ticks), [grid lines](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Grid), [strips](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Strips) and [labels](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axis_Labels). Their options are detailed in the corresponding topics.
