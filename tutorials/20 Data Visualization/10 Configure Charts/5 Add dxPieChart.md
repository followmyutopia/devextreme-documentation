<article data-show-web="/Content/Applications/17_2/DataVisualization/Lessons/ConfigureCharts/Step7/chart.html" data-show-first="chart.html">
*Data used in this help doc is taken from the **http://www.geohive.com** resource.*

To show a breakdown of a collection of data, use the **PieChart** widget supplied by the DevExtreme Data Visualization library. Like all widgets from this library, **PieChart** can be created using the [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/), [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/) or [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/) approach.

**Chart** and **PieChart** are very similar in configuration. Follow the steps below to configure the **PieChart** widget.

- **Create a PieChart**     
Add a div element to the body of your HTML page. After that, add a temporarily-empty *.js* file to your app and reference it in the head of your HTML page.

- **Provide Data**      
Declare a data source for **PieChart** and specify the argument and value fields for a series, as you did for **Chart** in the [Provide Data](/Documentation/Tutorial/Data_Visualization/Configure_Charts/#Provide_Data) step. Note that **PieChart** can hold multiple series. In this case, pass an array of objects to the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/) option. Each object in this array configures an individual series. To specify settings that must be applied to all series, use the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/) object.

- **Set a Series Type**     
There are only two series types in the **PieChart** widget - [Pie](/Documentation/Guide/Widgets/PieChart/Series_Types/#Pie) and [Doughnut](/Documentation/Guide/Widgets/PieChart/Series_Types/#Doughnut). Your choice impacts widget appearance rather than how clear the visualized data will appear to the viewer. Therefore, this tutorial preserves the default setting - the *Pie* series type.

- **Customize the Appearance**      
Most features of **Chart** are available in **PieChart** as well. Moreover, they are configured the same way. Enable tooltips and labels in your app using the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/) and [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/label/) objects. Then, specify a title and relocate the legend using the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/) and [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/) options.

As you can see, the **PieChart** and **Chart** widgets have much in common. To take a closer look at them, see [Reference](/Documentation/ApiReference/Data_Visualization_Widgets/) or the [Chart](/Documentation/Guide/Widgets/Chart/Overview/) and [PieChart](/Documentation/Guide/Widgets/PieChart/Visual_Elements/) guides.
</article>