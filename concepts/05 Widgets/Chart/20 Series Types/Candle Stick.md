The *candleStick* series type is used to show the variation in the price of stock over the course of a day. Each point consists of a rectangle (_body_), whose bottom and top values correspond to the _open_ and _close_ prices, and a vertical line (_shadow_, _wick_ or _tail_), whose bottom and top values correspond to the _low_ and _high_ prices. If the stock closes higher than its opening price, the _body_ is hollow. And if the stock closes lower than its opening price, the _body_ is filled.

![CandleStickSeriesType ChartJS](/Content/images/doc/17_1/ChartJS/CandleStick.png)

To use the *candleStick* series type, assign *'candlestick'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'candlestick'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/) topic.

You can change the default appearance using series options. For instance, you can change the following.

*   **Color**  
    A color from the chart's [palette](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes) is used by default. Set a custom color using the series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color) property. You can also set the color to be used to fill in the body of points. For this purpose, use the series' **innerColor** property.
    
*   **Reduction Options**  
    You can choose the price level (low, high, open or close) for which to enable reduction options, meaning that in case the value of a particular point's price level is lower in comparison to the value in the previous point, the subsequent point is painted in a specific color. To set the price to be compared, use the **level** property of the series' [reduction](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/reduction/) object. To set a specific color for a subsequent price that is lower than the price in the previous point, use the **color** property of the series' **reduction** object.
    
*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/selectionStyle/) object, defined within the **series** configuration object.
    
*   **Labels**  
    Make labels visible by setting the **visible** property of the series' [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/label/) object. By default, labels show the value of the price that is specified as a reduction level (see above). You can also display other information. For details on label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/) topic.

These and other options that can be set for series of the *candleStick* type are explained in the [CandleStickSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/) Reference section. Set the required series options within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsfinancialseriescandlestick/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>