With the *line* series type, data is displayed as points joined by a straight line. This series type, which is useful when you need to visualize a trend in data over intervals, is used in the **Chart** widget by default. However, there may be scenarios when you need to set this series type explicitly. To do this, assign *'line'* to the **type** property of the **series** configuration object.

![LineSeriesType ChartJS](/Content/images/doc/17_1/ChartJS/Line.png)

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'line'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/) topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/LineSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/LineSeries/selectionStyle/) object defined within the **series** configuration object.
    
*   **Line Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property.
    
*   **Line Dash Style**  
    Set the line's style using the series' **dashStyle** property. To set a dash style when the line is hovered or selected, set the **dashStyle** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/LineSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/LineSeries/selectionStyle/) object defined within the **series** configuration object.
    
*   **Line Point Options**  
    Set up the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/) object (see the [Series Points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/) topic).
    
*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/LineSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/) topic.

These and other options that can be set for series of the *line* type are explained in the [LineSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/LineSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartslineandpointseriesline/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
