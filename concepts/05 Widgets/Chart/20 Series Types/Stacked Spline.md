The *stackedSpline* series type is used when you have several series and it's necessary to compare how much each series adds to the total aggregate value for specific arguments. With this series type, series data is displayed as points joined using a spline interpolation. The lines do not overlap, because they are cumulative at each point.

![stackedSplineSeriesType ChartJS](/Content/images/doc/17_1/ChartJS/StackedSpline.png)

To use this series type, assign *'stackedspline'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'stackedspline'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/) topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/selectionStyle/) object defined within the **series** configuration object.
    
*   **Line Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property.

*   **Line Dash Style**  
    Set the line's style using the series' **dashStyle** property. To set a dash style when the line is hovered or selected, set the **dashStyle** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/selectionStyle/) object defined within the **series** configuration object.

*   **Line Point Options**  
    Set up the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/) object (see [Series Points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/ topic).

*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/) topic.

These and other options that can be set for *stackedSpline* type series are explained in the [stackedSplineSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartslineandpointseriesspline/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>