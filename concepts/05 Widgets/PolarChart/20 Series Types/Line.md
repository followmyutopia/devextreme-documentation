With the *line* series type, data is displayed as points joined by a line. This series type is useful when you need to visualize a trend in data over intervals.

![PolarLineSeriesType ChartJS](/Content/images/doc/17_2/ChartJS/PolarLine.png)

To understand how polar charts are built, imagine how a chart in a rectangular coordinate system is transformed by rounding its argument axis.

![Transformation from Rectangular to Polar Coordinates PolarLineSeriesType ChartJS](/Content/images/doc/17_2/ChartJS/PolarLine_TransformationFromStandardChart.png)

To use the *'line'* series type, assign *'line'* to the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#type) property of the **series** configuration object.

    <!--JavaScript-->var polarChartOptions = {
        // ...
        series: {
            type: 'line'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) topic. Note that, you can use DateTime and Numeric types for points in the data source, as well as the String type. By default, the data of the DateTime and Numeric types is displayed on continuous axes, while string values are displayed on discrete axes (you can manage the axes types using their **type** option). When continuous axes are used in the widget, the line chart is displayed using a smooth curve.

![Smooth PolarLineSeriesType ChartJS](/Content/images/doc/17_2/ChartJS/PolarLine_Smooth.png)

When either argument or value axis is discrete, the line chart joins data points by straight lines.

![Discrete PolarLineSeriesType ChartJS](/Content/images/doc/17_2/ChartJS/PolarLine_Discrete.png)

Note that you can use a spider web for polar charts displaying discrete data. For this purpose, set the widget's [useSpiderWeb](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#useSpiderWeb) option to *true*.

![SpiderWeb PolarLineSeriesType ChartJS](/Content/images/doc/17_2/ChartJS/PolarLine_useSpiderWeb.png)

Line polar charts are appropriate for data whose values span cyclically repeating arguments. In this instance, set the [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/) | [period](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#period) option.

![Cyclic PolarLineSeriesType ChartJS](/Content/images/doc/17_2/ChartJS/PolarLine_Smooth_Cyclic.png)

In some scenarios, you may need to close the line chart by joining the first point and the last point. For this purpose, set the series' [closed](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/#closed) option.

![Closed Cyclic PolarLineSeriesType ChartJS](/Content/images/doc/17_2/ChartJS/PolarLine_Smooth_Cyclic_Closed.png)

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/selectionStyle/) object defined within the **series** configuration object.

*   **Line Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/) property.

*   **Line Dash Style**  
    Set the line's style using the series' **dashStyle** property. To set a dash style when the line is hovered or selected, set the **dashStyle** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/selectionStyle/) object defined within the **series** configuration object.

*   **Line Point Options**  
    Set up the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/point/) object (see the [Series Points](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points) topic).

*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels) topic.

These and other options that can be set for series of the *line* type are explained in the [LineSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) object of the chart's configuration object.