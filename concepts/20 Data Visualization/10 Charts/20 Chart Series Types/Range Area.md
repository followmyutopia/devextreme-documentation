The *rangeArea* series type is used to display value ranges corresponding to the specified arguments. In this series type, data is displayed as the shaded area between the line that joins the series' start points and the line that joins the series' end points. The line that joins data points is the series' border, which is not visible by default.

![RangeAreaSeriesType ChartJS](/Content/images/doc/16_1/ChartJS/RangeArea.png)

To use this series type, assign *'rangearea'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'rangearea'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/) topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Area Color**  
    A color from the chart's [palette](/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property. This color will be used for the series' border. The color of the series area will be the same, but a specified [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/AreaSeries/#opacity) will be applied.
    
*   **Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/border/) object. When the border is visible, you can change its width, color and style using the **width**, **color** and **dashStyle** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/selectionStyle/) configuration object.
    
*   **Point Options**  
    Make points visible by setting the **visible** property of the series' [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/) object. For details on other point options, refer to the [Series Points](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Points) topic.
    
*   **Point Label Options**  
    To make labels visible, set the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/label/) object. Labels are shown for both the beginning and end values by default. You can allow other information to be shown. For details on label options, refer to the [Series Point Labels](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Point_Labels) topic.

These and other options that can be set for series of the *rangeArea* type are explained in the [RangeAreaSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsrangeseriesarea/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>