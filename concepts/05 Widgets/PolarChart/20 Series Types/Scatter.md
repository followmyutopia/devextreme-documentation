With the *scatter* series type, data is displayed as a collection of points. This series type is often used to display radar points.

![PolarScatterSeriesType ChartJS](/Content/images/doc/19_2/ChartJS/PolarScatter.png)

To understand how polar charts are built, imagine how a chart in a rectangular coordinate system is transformed by rounding its argument axis.

![Transformation from Rectangular to Polar Coordinates PolarScatterSeriesType ChartJS](/Content/images/doc/19_2/ChartJS/PolarScatter_TransformationFromStandardChart.png)

**PolarChart** uses the *scatter* series type by default. But in some cases, you may need to specify this series type explicitly. For this purpose, assign *'scatter'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var polarChartOptions = {
        // ...
        series: {
            type: 'scatter'
        }
    };

To learn how to specify data for a chart series, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) topic.

Note that you can use a spider web for polar charts displaying discrete data. For this purpose, set the widget's [useSpiderWeb](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#useSpiderWeb) option to **true**.

![SpiderWeb PolarScatterSeriesType ChartJS](/Content/images/doc/19_2/ChartJS/PolarScatter_useSpiderWeb.png)

You can change the default appearance using series options. For instance, you can change the following.

*   **Point Color**  
    A color from the chart's [palette](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/) property.
    
*   **Point Options**  
    Set up the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/point/) object (see the [Series Points](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points) topic).
    
*   **Point Labels**  
    Make point labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/ScatterSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels) topic.

These and other options that can be set for series of the *scatter* type are explained in the [ScatterSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/ScatterSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) object of the chart's configuration object.