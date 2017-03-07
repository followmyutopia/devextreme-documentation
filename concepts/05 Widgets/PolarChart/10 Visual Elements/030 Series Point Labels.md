Each [series point](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points) can be accompanied by a text label representing data related to the point. These are series point labels. For series of different types, points represent different kinds of data, thus the corresponding point labels can carry a point's value, argument or both. If required, you can also make a label display custom information.

![Point Labels](/Content/images/doc/16_2/ChartJS/Polar_SeriesLabels.png)

To change the default label appearance, use options of the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/) object. This object should be defined within the [series](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series) whose labels must be customized. If you need to provide the same options for point labels in all series in the chart, define the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/label/) object within the **commonSeriesSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
        // ...
		commonSeriesSettings: {
			label: {
				// Common settings for all series
			}
		},
		series: {
			label: {
				// Settings for an individual series
			}
		}
	};

The following list provides an overview of the **label** object options.

* **Visibility**		
To make point labels visible, set the **label** object's [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#visible) property to _true_. If there are too many labels and they are not required to be shown all together, you can set a maximum for the count of labels that can be shown. For this purpose, use the [maxLabelCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#maxLabelCount) property of a particular series or of the **commonSeriesSettings** object.

* **Arrangement**		
If required, you can rotate labels using the [rotationAngle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#rotationAngle) property. For bar- and stacked bar series, place labels inside the bar. For this purpose, set the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#position) property to the _inside_ value.

* **Text Customization and Formatting**			
Labels represent point values by default. You can change the way these values are shown. For this purpose, use the [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#format) label property. If required, you can set a custom text to be shown by labels. For this purpose, assign a function returning the text to the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#customizeText) property of the **label** object. For details on label formatting, refer to the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) section.

* **Font Settings**			
To specify the required font settings for a label text, use properties of the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/font/) object, defining it within the **label** object.

* **Appearance**		
By default, labels are painted in the color of the series whose points they represent. You can set a custom background color for labels. For this purpose, use the [backgroundColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/#backgroundColor) property of the **label** object. In addition, you can make a label border visible and set up its properties, using the [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/border/) object. To show labels connected to their points, even when the points are not visible, use connectors. The connector joins a label with its point or a place where the point should be. To make connectors visible, define the [connector](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/label/connector/) object within the **label** object and set its **visible** property to _true_. If required, you can change the connector's color and width using the corresponding properties of the **connector** object.