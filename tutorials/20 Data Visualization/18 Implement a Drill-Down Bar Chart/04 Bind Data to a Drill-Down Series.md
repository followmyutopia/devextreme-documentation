<article data-show-web="/Content/Applications/17_1/DataVisualization/Lessons/DrillDownChart/Step3_2/chart.html" data-show-first="chart.js">

In this tutorial, the drill-down series displays products that match the clicked category. To pass an array with products to the drill-down series, the array must be preserved beforehand. The best way of doing this is placing this array in the tag of the top series using the **series** | [tagField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#tagField) option.

Specifying the drill-down series takes exactly the same actions as it took for the top series. Set the **dataSource**, **argumentField** and **valueField** options as shown in the code below.

To navigate from the top series to the drill-down series, implement a handler for the [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointClick) event. Within this handler, use the [option](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#optionoptions) method to substitute the top level chart configuration for the drill-down one.

Note that the **type** and **pathModified** options aren't set for the drill-down level configuration. That is because when one configuration is substituted for another, the result will be a combination of them. Thus, **type** and **pathModified** values will be inherited from top level configuration. Yet the **pointClick** event must be handled differently on each level, so it is redefined for the drill-down one.

Now, the chart navigates you from the categories to the products by a click on a bar. However, it has one severe flaw - once having reached the products, the user cannot get back to the categories. In the next step, this flaw will be eliminated.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)</article>