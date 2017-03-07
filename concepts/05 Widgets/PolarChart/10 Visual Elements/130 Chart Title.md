The **PolarChart** widget can be displayed with a title. You can use the chart title to provide either explanatory text for the displayed data or any additional textual information.

![ChartTitle](/Content/images/doc/16_2/ChartJS/Polar_ChartTitle.png)

To specify the title text, use the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/title/) property as demonstrated in the code below.

	<!--JavaScript-->var polarChartOptions = {
		// ...
		title: 'Experiment Results'
	};

The **title** property may also be assigned an object that customizes default title options. In that case, the title text must be assigned to the **text** field of this object.

	<!--JavaScript-->var polarChartOptions = {
		title: {
			text: 'Values',
			// ...
		}
	};

The following list provides an overview of title options.

* **Title Location**		
You can place the title on any side of the chart. For this purpose, use the [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/title/#horizontalAlignment) and [verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/title/#verticalAlignment) properties of the chart's **title** configuration object.

* **Text Font**		
If you require a change in the title's font, specify the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/title/font/) property of the **title** configuration object.

You can also configure the chart subtitle using the [subtitle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/title/subtitle/) object.