Strips are highlighted areas on a chart within a defined range of values (minimum and maximum) of an axis to which they belong. In general, strips are used to visually represent a range of values behind a series to trace whether the series point values fall in or out of that range.

![Strip](/Content/images/doc/16_1/ChartJS/Strip.png)

Strips are child elements of the argument and value axes. To define the strips, use the [strips](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/) array within the **argumentAxis** and **valueAxis** configuration objects. To change common settings for all strips in the chart, define the [stripStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/stripStyle/) object within the **commonAxisSettings** configuration object.

	<!--JavaScript-->var chartOptions = {
		commonAxisSettings: {
			stripStyle: {
				//...
			}
		},
		//...
	};

To set the bounds of a strip, use the strip's **startValue** and **endValue** properties. In addition, set the color of the strip using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/#color) property. The following code demonstrates this.

	<!--JavaScript-->var chartOptions = {
		valueAxis: {
			strips: [
				{ startValue: 40, endValue: 50, color: 'blue' },
				{ startValue: 70, endValue: 80, color: 'red' }
			]
		},
		//...
	};

To identify a strip and provide details of its purpose, display a label on it. To set the text and other options for the label, define the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/label/) object within the **strips** (or **stripStyle** in case you use **commonAxisSettings**) object. The following list provides an overview of strip label options.

* **Text**		
Set the text to be shown by a label using the [text](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/label/#text) property.

* **Location**		
Specify the location of a strip label using the **strips'** [paddingLeftRight](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/#paddingLeftRight) and [paddingTopBottom](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/#paddingTopBottom) properties, and the **label**'s [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/label/#horizontalAlignment) and [verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/label/#verticalAlignment) properties.

* **Font Settings**		
To specify the required font settings for a label text, use the properties of the **strips** | **label** | [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/label/font/) object.