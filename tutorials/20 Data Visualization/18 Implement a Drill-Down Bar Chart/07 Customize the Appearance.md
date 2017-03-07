<article data-show-web="/Content/Applications/16_1/DataVisualization/Lessons/DrillDownChart/Step6/chart.html" data-show-first="chart.js">

To escape the drab appearance of a single-series chart, paint bars in different colors. As all bars belong to a single series, you need to use the [customizePoint](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizePoint) function to do it. Note that the top and drill-down series use different predefined palettes obtained with the **DevExpress.viz.getPalette('paletteName')** method.

#####See Also#####
For further information about how to register, obtain and apply palettes, see the [Palette](/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes) article.

To help the user identify which chart he/she is viewing, provide a title for each level using the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/) option. Additionally, provide titles for value axes to denote their units of measure. For this purpose, use the [title](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/title/) option of the **valueAxis** object.

Categories and products have too lengthy names that do not fit into the width of the widget when arranged in a single line. To rearrange them in two lines, assign *"stagger"* to the **argumentAxis** | **label** | [overlappingBehavior](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/overlappingBehavior/) option of the top level configuration. The drill-down level configuration will catch up the value of this option as well.

This tutorial showed you how to implement a drill-down bar chart using the **Chart** widget from the DevExtreme Data Visualization library. To take a closer look at **Chart** and other widget capabilities from this library, refer to the [Data Visualization Guides](/Documentation/Guide/#Data_Visualization) section. 
</article>