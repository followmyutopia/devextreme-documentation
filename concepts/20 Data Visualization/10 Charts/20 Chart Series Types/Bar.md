In the *bar* series type, data is displayed as sets of rectangular bars with lengths proportional to the values that they represent. Often, *bar* series are used to compare values in different discrete categories such as months, countries, age, etc. When there are several bar series, bars for each argument are displayed side-by-side. If you need to show bars for each series stacked on each other, use the *stackedBar* series type (see [Stacked Bar](/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/#Stacked_Bar)).

![BarSeriesType ChartJS](/Content/images/doc/16_1/ChartJS/Bar.png)

To use the *bar* series type, assign *'bar'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'bar'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Data_Visualization/Charts/Data_Binding/) topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Bar Color**  
    A color from the chart's [palette](/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property.
    
*   **Bar Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/border/) object. When the border is visible, you can change its width, style and color using the **width**, **dashStyle** and **color** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BarSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BarSeries/selectionStyle/) configuration object.
    
*   **Corner Radius**  
    Set a corner radius for bars using the series' **cornerRadius** property. This is helpful if you need rounded corners in bars.
    
*   **Bar Label Options**  
    Make bar labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BarSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Point_Labels) topic.

These and other options that can be set for series of the *bar* type are explained in the [BarSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BarSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsbarseriessimplestsingle/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>