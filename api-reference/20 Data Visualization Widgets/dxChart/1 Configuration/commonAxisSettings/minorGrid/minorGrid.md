===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the minor grid.
<!--/shortDescription-->

<!--fullDescription-->
In addition to the [major grid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/grid/) built on major ticks, the **Chart** widget provides the minor grid built on minor ticks.

![DevExtreme HTML5 Charts MinorGridLines](/Content/images/doc/19_1/ChartJS/visual_elements/minor_grid_lines.png)

[note]Neither minor ticks, nor the minor grid can be displayed if the axis is of the *"discrete"* type.

The **commonAxisSettings**.[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorGrid/) object specifies common settings for all minor grid lines in the chart. To configure only those grid lines that descend from a particular axis, use the following objects.

- **argumentAxis**.[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorGrid/)     
- **valueAxis**.[minorGrid](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorGrid/)       

Axis-specific settings override common settings.

[note]Displaying the minor grid without the major grid may impair the readability of a chart. To prevent this situation, we recommend you use the minor grid only in conjunction with the major grid.
<!--/fullDescription-->