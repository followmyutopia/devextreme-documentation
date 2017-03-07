<article data-show-web="/Content/Applications/16_2/DataVisualization/Lessons/DrillDownChart/Step3_1/chart.html" data-show-first="chart.js">

Assign the DataSource object, which you have implemented in the previous step, to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource) option of **Chart**. Then, specify which data source fields must provide arguments and values for the chart series. For this purpose, set the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#argumentField) and [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#valueField) options of the **series** object. Finally, specify the series type using the **series** | [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) option.

#####See Also#####
Navigate to the [Series Types](/Documentation/Guide/Widgets/Chart/Series_Types/) topic to view all series types that can be used in **Chart**.

[note]If you place the **Chart** widget on a page that uses a path modifier, you need to set the [pathModified](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pathModified) option to *true*. As an example of such modifiers, the [base](http://www.w3schools.com/tags/tag_base.asp) HTML tag can be considered. Also, we recommend you enable this option if you place the widget inside the [`<iframe>`](http://www.w3schools.com/tags/tag_iframe.asp) tag. As our site uses this tag to present the resulting widget, the **pathModified** option is specified in this demo.

Go to the next step to learn how to bind data to the drill-down series.

</article>