The *stackedBar* series type is used when there are several series that represent values for discrete categories. With this series type, data is displayed as rectangular bars with lengths proportional to the values that they represent. Bars of each subsequent series are stacked on top of the bars of the previous series. The height of the resulting bar shows the combined result of a category.

![StackedBarSeriesType ChartJS](/Content/images/doc/17_1/ChartJS/StackedBar.png)

To use this series type, assign *'stackedbar'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'stackedbar'
        }
    };
 
To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/) topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Bar Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property.
    
*   **Bar Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/border/) object. When the border is visible, you can change its width, line style and color, using the **width**, **dashStyle** and **color** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/selectionStyle/) configuration object.
    
*   **Corner Radius**  
    Set a corner radius for bars using the series' **cornerRadius** property. This is helpful if you need rounded corners in bars.
    
*   **Stack**  
    Series values can be located in more than one stack for each argument value. Set the appropriate stack for a series using the [stack](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) property. This is helpful if you need to divide series between the required number of logical stacks (e.g., 'men' and 'women' stacks).
    
*   **Bar Label Options**  
    Make bar labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/label/) object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/) topic.

These and other options that can be set for series of the *stackedBar* type are explained in the [StackedBarSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StackedBar/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Stacked Bar Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SideBySideStackedBar/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Side-By-Side Stacked Bar Demo</a>