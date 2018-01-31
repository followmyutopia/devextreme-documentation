The *area* series type is useful when you need to emphasize a change in values. With this series type, data is displayed by a line that joins points, and the shaded area between this line and the zero value. This line is a border and is invisible by default.

![AreaPolarSeriesType ChartJS](/Content/images/doc/18_1/ChartJS/PolarArea.png)

To understand how polar charts are built, imagine how a chart in a rectangular coordinate system is transformed by rounding its argument axis.

![Transformation from Rectangular to Polar Coordinates PolarAreaSeriesType ChartJS](/Content/images/doc/18_1/ChartJS/PolarArea_TransformationFromStandardChart.png)

To use the *area* series type, assign *'area'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var polarChartOptions = {
        // ...
		series: {
			type: 'area'
		}
	};

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) topic. Note that you can use DateTime and Numeric types for points in the data source, as well as the String type. By default, the data of the DateTime and Numeric types is displayed on continuous axes, while string values are displayed on discrete axes (you can manage the axes types using their **type** option). When continuous axes are used in the widget, the area chart is displayed using a smooth border line.

![Smooth PolarAreaSeriesType ChartJS](/Content/images/doc/18_1/ChartJS/PolarArea_Smooth.png)

When either the argument or value axis is discrete, the area chart joins data points by straight lines.

![Discrete PolarAreaSeriesType ChartJS](/Content/images/doc/18_1/ChartJS/PolarArea_Discrete.png)

Note that you can use a spider web for polar charts displaying discrete data. For this purpose, set the widget's [useSpiderWeb](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#useSpiderWeb) option to **true**.

![SpiderWeb PolarAreaSeriesType ChartJS](/Content/images/doc/18_1/ChartJS/PolarArea_useSpiderWeb.png)

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Area Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/) property. This color will be used for the series' border. The color of the series area will be the same, but a specified capacity will be applied.
    
*   **Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/border/) object. When the border is visible, you can change its width and color, using the **width**, **color** and **dashStyle** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/AreaSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/AreaSeries/selectionStyle/) configuration object.
    
*   **Point Options**  
    Make points visible by setting the **visible** property of the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/point/) object. For details on other point options, refer to the [Series Points](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points) topic.
    
*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/AreaSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels) topic.

These and other options that can be set for series of the *area* type are explained in the [AreaSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/AreaSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) object of the chart's configuration object.