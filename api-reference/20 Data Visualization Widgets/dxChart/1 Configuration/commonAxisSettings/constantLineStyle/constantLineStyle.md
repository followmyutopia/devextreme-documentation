===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the appearance of all constant lines in the widget.
<!--/shortDescription-->

<!--fullDescription-->
![DevExtreme HTML5 Charts ConstantLines](/Content/images/doc/18_2/ChartJS/visual_elements/constant_lines.png)

The **commonAxisSettings**.**constantLineStyle** object, which is described here, specifies common settings for all constant lines in the chart. To configure only those constant lines that belong to a particular axis, use the following objects.

- **argumentAxis**.[constantLineStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLineStyle/)     
- **valueAxis**.[constantLineStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLineStyle/)       

To configure individual constant lines, use the following arrays of objects.

- **argumentAxis**.[constantLines[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLines)     
- **valueAxis**.[constantLines[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLines) 

Individual settings override axis-specific settings which, in their turn, override common settings.
<!--/fullDescription-->