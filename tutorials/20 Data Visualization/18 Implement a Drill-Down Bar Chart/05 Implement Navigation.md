<article data-show-web="/Content/Applications/17_1/DataVisualization/Lessons/DrillDownChart/Step4/chart.html" data-show-first="chart.js">

To implement navigation from the drill-down back to the top series, redesign the chart legend. Although the legend is meant to display the information about chart series, its flexibility allows you to turn it into an improvised "Back" button for the drill-down series.

To configure the legend, use the [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/) object. First, specify the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#visible) field of this object to make the legend visible. Then, relocate it using the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#position) and [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#horizontalAlignment) options. To make the legend look more like a button, hide the legend markers by setting the [markerSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#markerSize) option to 0. Then, specify a custom text for the legend using the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#customizeText) option.

By default, when a user hovers the mouse pointer over a legend item, the chart highlights the corresponding series. This behavior for a button-like legend is not needed, so disable it using the [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#hoverMode) option.

To navigate the user back to the top series by a click on the legend, implement a handler for the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#legendClick) event. Within this handler, substitute the drill-down level configuration for the top one.

Finally, hide the legend of the top level by setting the **legend** | **visible** option to *false*.

Now, the user can navigate between chart levels in both directions. However, the user sometimes cannot identify the category/product the bar represents. This occurs due to long category/product titles. To make this information available for the user, display it in the tooltip. Proceed to the next step to learn how to configure the tooltip.
</article>