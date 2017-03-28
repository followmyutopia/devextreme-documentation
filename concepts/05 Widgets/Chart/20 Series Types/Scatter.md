With the *scatter* series type, data is displayed as a collection of points. This series type is often used when a variable exists under the control of the tester.

![ScatterSeriesType ChartJS](/Content/images/doc/17_1/ChartJS/Scatter.png)

To use this series type, assign *'scatter'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'scatter'
        }
    };

To learn how to specify data for a chart series, refer to the [Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/) topic.

You can change the default appearance using series options. For instance, you can change the following.

*   **Point Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property.
    
*   **Point Options**  
    Set up the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/) object (see the [Series Points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/ topic).
    
*   **Point Labels**  
    Make point labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/ScatterSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/) topic.

These and other options that can be set for series of the *scatter* type are explained in the [ScatterSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/ScatterSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartslineandpointseriesscatter/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>