<article data-show-web="/Content/Applications/117_1DataVisualization/Lessons/ConfigureRangeSelector/Step3/rangeSelector.html" data-show-first="rangeSelector.js">
The **RangeSelector** widget can display an image or a chart in its background. In this tutorial, we will place an image in the background. For this purpose, use the **background** | [image](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/image/) object. Assign the image's URL to the **url** option of this object. Additionally, you can change the location of the image in the background using the **location** option, but for this app, the default setting is better suited.

If you need to display a chart in the background, refer to the [chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/) option description for detailed information.

Note that since the widget displays the time span of only one day, in this step, we hid the [scale markers](/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Scale/Scale_Markers) by setting the **scale** | **marker** | **visible** option to *false*.

In order to make **RangeSelector** interact with other elements on a page, you need to handle the events fired by the widget. Learn how to do this in the next step.
</article>