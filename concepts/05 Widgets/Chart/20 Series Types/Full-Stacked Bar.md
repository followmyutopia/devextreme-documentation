The *fullStackedBar* series type is used when it's necessary to compare the value percentage of several *bar* series for each argument. With this series type, data is displayed as rectangular bars with lengths proportional to their value percentage. Bars of each subsequent series are stacked on top of the bars of the previous series. The height of the resulting bar is always equal to 100 percent. The value axis is always continuous and displays the range from 0 to 100 percent.

![FullStackedBarSeriesType ChartJS](/Content/images/doc/17_1/ChartJS/FullStackedBar.png)

To use the *fullStackedBar* series type, assign *'fullstackedbar'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'fullstackedbar'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/) topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Bar Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property.

*   **Bar Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/border/) object. When the border is visible, you can change its width, line style and color, using the **width**, **dashStyle** and **color** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/selectionStyle/) configuration object.

*   **Corner Radius**  
    Set a corner radius for bars using the series' **cornerRadius** property. This is helpful if you need rounded corners in bars.

*   **Stack**  
    Series values can be located in more than one stack for each argument value. Set the appropriate stack for a series using the [stack](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/stack/) property. This is helpful if you need to divide series between the required number of logical stacks (e.g., 'men' and 'women' stacks).

*   **Bar Label Options**  
    Make bar labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/) topic.

These and other options that can be set for series of the *fullStackedBar* type are explained in the [FullStackedBarSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FullStackedBar/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Full-Stacked Bar Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SideBySideFullStackedBar/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Side-by-Side Full-Stacked Bar Demo</a>