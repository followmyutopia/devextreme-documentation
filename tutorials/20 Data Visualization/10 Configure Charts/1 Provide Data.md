<article data-show-web="/Content/Applications/17_2/DataVisualization/Lessons/ConfigureCharts/Step2/chart.html" data-show-first="chart.js">
*Data used in this help doc is taken from the **http://www.geohive.com** resource.*

To define the data source to be used in **Chart**, assign an array of objects to the chart's [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource) option. This option can also accept the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) (or its configuration object), which can be reviewed in the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic, but for the sake of simplicity, this tutorial uses a primitive array.

Then, define chart series using data from the assigned data source. For this purpose, use the following series options.

- **name**      
Identifies a series on the legend.
- **argumentField**     
Specifies the data source field that provides arguments for series points.
- **valueField**    
Specifies the data source field that provides values for series points.

As you can see in the code below, you can use the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object to specify the options that are common for all series in a chart.

As you may have noticed, now **Chart** uses its default series type - **Line**. In the next step, you will change the series type to a better suited one.
</article>