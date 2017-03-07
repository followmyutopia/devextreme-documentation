<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_1/DataVisualization/UseRemoteDataforChart/Step4/chart.html" data-show-first="chart.js">
In this concluding step, you will make several minor corrections to the chart appearance. Relocate the chart legend to the bottom so that it occupies less space. For this purpose, use the **horizontalAlignment** and **verticalAlignment** options of the [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/) configuration object.

As this demo deals with "days", there is no need to display arguments that go beyond the [1; 31] range. To restrict the argument axis to this range, remove the left and right margins by setting the [valueMarginsEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#valueMarginsEnabled) option to *false*.

There are many more configuration options in the **Chart** widget that will help you visualize data the way you require. To learn how to configure the **Chart** widget in more detail, refer to the [Configure Charts](/Documentation/Tutorial/Data_Visualization/Configure_Charts/#Configure_Charts) tutorial and the [Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/) section.
</article>