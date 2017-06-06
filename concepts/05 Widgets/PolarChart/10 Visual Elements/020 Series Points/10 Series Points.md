A series point is a visual representation of a series' data point. Because the **PolarChart** widget supports numerous series types, which represent and organize data in different ways, the visual representation of a data point differs from one type to another.

![Series Points](/Content/images/doc/17_2/ChartJS/Polar_Series_Points.png)

By default, points are drawn in a line-like series. In area series, points are not visible, but can be shown if required. There are also series where points are represented in a specific way - a bar and stacked bar. These specific presentations of series points are customized via specific series options. You can learn more on them in series types descriptions (see the [Series](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series) section). Series with a typical point representation expose the **point** configuration object that can be used for point customization. If you need to apply similar settings to all series in the chart, use the **commonSeriesSettings** configuration object's [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/point/) object. Note that options specified individually within [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) objects override the common settings specified within the **commonSeriesSettings** object.

	<!--JavaScript-->var polarChartOptions = {
        // ...
		commonSeriesSettings: {
			point: {
				// Common settings for all series
			}
		},
		series: {
			point: {
				// Settings for an individual series
			}
		}
	};

The following list provides an overview of the **point** object options.

* **Visibility**		
Use the point's [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/#visible) property to change point visibility.

* **Appearance**		
You can change the point's shape, color and size, using the [symbol](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/#symbol), [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/#color) and [size](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/#size) properties.

* **Border**		
Make a border visible by setting the **visible** property of the point's [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/border/) object. In addition, you can change the border width and color, using the border's **width** and **color** properties.

* **Hover Options**		
Set a custom color, size and border settings for the "hovered" point state. For this purpose, define the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/hoverStyle/) object within the **point** configuration object.

* **Selection Options**		
Set a custom color, size and border settings for the "selected" point state. For this purpose, define the [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/selectionStyle/) object within the **point** configuration object.

Series points (regardless of how they are represented) can be accompanied with textual labels. Refer to the [Series Point Labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels) topic for details.