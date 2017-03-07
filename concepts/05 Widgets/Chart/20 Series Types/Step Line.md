The *stepLine* series type has all the features and characteristics of the *line* series type, but the line that joins points in the shortest way in the "line" series is replaced by the vertical and horizontal lines in the "stepLine" series. These lines form so-called "steps".

![StepLineSeriesType ChartJS](/Content/images/doc/16_2/ChartJS/StepLine.png)

To use this series type, assign *'stepline'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'stepline'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepLineSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepLineSeries/selectionStyle/) object defined within the **series** configuration object.

*   **Line Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property.

*   **Line Dash Style**  
    Set the line's style using the series' **dashStyle** property. To set a dash style when the line is hovered or selected, set the **dashStyle** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepLineSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepLineSeries/selectionStyle/) object defined within the **series** configuration object.

*   **Line Point Options**  
    Set up the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/) object (see the [Series Points](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Points) topic).

*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepLineSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Point_Labels) topic.

These and other options that can be set for series of the *stepLine* type are explained in the [StepLineSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepLineSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartslineandpointseriesstep/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>