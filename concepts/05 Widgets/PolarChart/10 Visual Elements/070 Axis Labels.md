Axis labels represent textual values for [axis ticks](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks).

![Axis Labels](/Content/images/doc/17_2/ChartJS/Polar_AxisLabels.png)

Axis labels are generated automatically. However, you can change their settings if your task requires that. Label settings are set using the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/label/) object of the **argumentAxis**, **valueAxis** or **commonAxisSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
		commonAxisSettings: {
			label: {
				// ...
			}
		},
		// ...
	};

The following list provides an overview of label options.

* **Visibility**		
To mark point labels as visible/invisible, use the **label** object's [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/label/#visible) property.

* **Intelligent Arrangement**		
If labels overlap each other in certain scenarios, specify how to resolve this issue using the [overlappingBehavior](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/label/#overlappingBehavior) property.

* **Font Settings**		
To specify the required font settings for label text, specify properties of the **label**.[font](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/label/font/) object.

* **Text Customization and Formatting**			
You can change the way the default text is displayed by labels. For this purpose, use the [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/label/#format)  label property. If it is required, you can set a custom text to be shown by labels. For this purpose, implement a function that returns the required text and assign it to the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/label/#customizeText) property of the **label** object. For details on data formatting, refer to the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) topic.

* **Label Position**		
You can shift labels closer to or farther from the axis. For this purpose, use the **label** object's [indentFromAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/label/#indentFromAxis) property.