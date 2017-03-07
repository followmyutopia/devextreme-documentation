<article data-show-web="/Content/Applications/16_2/DataVisualization/Lessons/ConfigureVectorMap/Step6/vectorMap.html" data-show-first="vectorMap.js">

Areas and markers are configured using the corresponding objects in the [layers](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/) array. Options that are specified on the first level of those objects are applied to all the areas or markers. However, options can be specified for each area or marker individually.

To specify options for a particular area, assign a callback function to the **customize** option of the **area** layer configuration object. To find the list of the options that can be accessed with the **customize** function, refer to the [layers](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/) option description.

To implement the task, specify a special color for the areas that represent the top ten most populous states; other areas will be colored differently. To distinguish those special areas in code, declare and initialize an array that contains the names of the most populous states. Then, use the **customize** option of the **area** layer object to color the special areas. Note that to tell whether or not an area should be colored, the jQuery [inArray](http://api.jquery.com/jQuery.inArray/) function is used. The remaining areas are colored using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#color) option of the area object in the **layers** array.

In addition, specify a color for an area and its border when this area is selected using the [selectedColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedColor) and [selectedBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderColor) options of the area object in the **layers** array.

</article>