Strips are highlighted areas on a chart within a defined range of values (minimum and maximum) of an axis to which they belong. In general, strips are used to visually represent a range of values behind a series to trace whether the series point values fall in or out of that range.

![Strip](/Content/images/doc/18_1/ChartJS/Polar_Strip.png)

Strips are child elements of the argument and value axes. To define a strip, use the [strips](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/strips/) array within the **argumentAxis** and/or **valueAxis** configuration objects. 
To change common settings for strips of the argument or value axis, define the [stripStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/stripStyle/) object within the **argumentAxis**/**valueAxis** configuration object. To change common settings for all strips in the chart, define the [stripStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/stripStyle/) object within the **commonAxisSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
		argumentAxis: {
			strips: [
				{ /* ... */ },
				// ...
			],
			stripStyle: {
				// ...
			}
		},
		commonAxisSettings: {
			stripStyle: {
				// ...
			}
		},
		// ...
	};

To set the bounds of a strip, use the strip's [startValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/strips/#startValue) and [endValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/strips/#endValue) properties. In addition, set the color of the strip using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/strips/#color) property. The following code demonstrates this.

	<!--JavaScript-->var polarChartOptions = {
		valueAxis: {
			strips: [
				{ startValue: 40, endValue: 50, color: 'blue' },
				{ startValue: 70, endValue: 80, color: 'red' }
			]
		},
		//...
	};

To identify a strip and provide details of its purpose, display a label on it. Define the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/strips/label/) object within the **strips** (or **stripStyle** in case you use **commonAxisSettings**) object and set its [text](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/strips/label/#text) property. Optionally, you can customize the label using the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/strips/label/font/) property.