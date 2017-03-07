The **Chart** widget can be displayed with a title. You can use the chart title to provide either explanatory text for the displayed data or any additional textual information.

![Chart Title](/Content/images/doc/16_1/ChartJS/ChartTitle.png)

To specify the title text, use the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/) property as demonstrated in the code below.

	<!--JavaScript-->var chartOptions = {
		//...
		title: 'Stock Prices'
	};

The **title** property may also be assigned an object that customizes default title options. In that case, the title text must be assigned to the **text** field of this object.

	<!--JavaScript-->var chartOptions = {
		title: {
			text: 'Values',
			// ...
		}
	};

The following list provides an overview of title options.

* **Title Location**		
You can place the title on any side of the chart. For this purpose, use the [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/#horizontalAlignment) and [verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/#verticalAlignment) properties of the chart's **title** configuration object.

* **Text Font**		
If you require a change in the title's font, specify the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/font/) property of the **title** configuration object.

You can also configure the chart subtitle using the [subtitle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/subtitle/) object.