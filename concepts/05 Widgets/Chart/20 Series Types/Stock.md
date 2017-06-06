The *stock* series type is used to show a variation in stock prices over the course of a day. The _low_ and _high_ prices are represented by the bottom and top values of a vertical line, which is shown at each point, and the _open_ and _close_ prices are represented by the left and right tick marks, respectively.

![StockSeriesType ChartJS](/Content/images/doc/17_2/ChartJS/Stock.png)

To use this series type, assign *'stock'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'stock'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/) topic.

You can change the default appearance using series options. For instance, you can change the following.

*   **Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property.

*   **Reduction Options**  
    You can choose the price level (low, high, open or close) for which to enable reduction options. This means that if the value of a particular point's price level is lower in comparison to the value in the previous point, the subsequent point is painted in a specific color. To set the price to be compared, use the **level** property of the series' [reduction](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#reduction) object. To set a specific color for the subsequent price that is lower than the price in the previous point, use the **color** property of the series' **reduction** object.

*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/selectionStyle/) object defined within the **series** configuration object.

*   **Labels**  
    Make labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/label/) object. By default, labels show the value of the price that is specified as a reduction level (see above). You can also display other information. For details on label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/) topic.

These and other options that can be set for series of the *stock* type are explained in the [StockSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.
    
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsfinancialseriesstock/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>