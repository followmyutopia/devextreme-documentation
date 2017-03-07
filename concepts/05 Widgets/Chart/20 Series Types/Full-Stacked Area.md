The *fullStackedArea* series type is used when it is necessary to compare the value percentage of several *area* series for each argument. In this series type, the areas do not overlap because they are cumulative at each point. The value axis is always continuous and it displays a range from 0 to 100 percent.

![FullStackedAreaSeriesType ChartJS](/Content/images/doc/16_2/ChartJS/FullStackedArea.png)

To use the *fullStackedArea* series type, assign *'fullstackedarea'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'fullstackedarea'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) topic.

To change the default appearance of a series, set the options of the **series** configuration object. For example, you can change the following:

*   **Area Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property. This color will be used for the series border line. The color of the series area will be the same, but a particular [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/AreaSeries/#opacity) will be applied.

*   **Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/border/) object. When the border is visible, you can change its width, color and style using the **width**, **color** and **dashStyle** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. Set the properties of the **border** object within the series' [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedAreaSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedAreaSeries/selectionStyle/) configuration object to do this.

*   **Points**  
    Make points visible by setting the **visible** property of the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/) object. For details on other point options, refer to the [Series Points](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Points) topic.

*   **Point Labels**  
    Make point labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedAreaSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Point_Labels) topic.

These and other options that can be set for series of the fullStackedArea type are explained in the [FullStackedAreaSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedAreaSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsareaseriesarea/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>