<article data-show-web="/Content/Applications/16_2/DataVisualization/Lessons/CreateMultiPaneChart/Step3/chart.html" data-show-first="chart.js">

You can bind a series to a pane individually using the **series** | [pane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#pane) option. Or if you bind several series to a pane, use the **pane** option of the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object instead. Use the former approach to bind the *precipitation* series to the *top* pane, and the latter approach to bind two *temperature* series to the *bottom* pane.

Finally, supply the value axes with titles that show their measurement units. Each pane has its own value axis. To configure them, assign an array of two objects to the [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/) option. In these objects, specify the **pane** and **title** fields, as demonstrated in the code below.

From this tutorial, you discovered how to create a **Chart** widget with several panes. To learn more about panes, see the [Panes](/Documentation/Guide/Widgets/Chart/Panes/Overview/) topic in the **Chart Elements** guide. For a full list of widget options and methods, proceed to [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/).

</article>