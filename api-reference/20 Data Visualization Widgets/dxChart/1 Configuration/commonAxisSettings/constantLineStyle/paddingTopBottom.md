<!--id-->dxChart.Options.commonAxisSettings.constantLineStyle.paddingTopBottom<!--/id-->
===========================================================================
<!--default-->10<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Generates a pixel-measured empty space between the top/bottom side of a constant line and the constant line label.
<!--/shortDescription-->

<!--fullDescription-->
This option depends on the **label**.**verticalAlignment** in the following way.

- **verticalAlignment** is *"top"* &rarr; padding applies to the top side of a constant line;       
- **verticalAlignment** is *"bottom"* &rarr; padding applies to the bottom side of a constant line;      
- **verticalAlignment** is *"center"* &rarr; padding is calculated automatically.

![DevExtreme HTML5 Charts ConstantLinePadding](/Content/images/doc/19_2/ChartJS/ConstantLinePaddingTopBottom.png)

#####See Also#####
- **argumentAxis**.**constantLineStyle**.**label**.[verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/constantLineStyle/label/#verticalAlignment) - aligns constant line labels in the vertical direction. Applies to the constant lines belonging to the argument axis.
- **valueAxis**.**constantLineStyle**.**label**.[verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/constantLineStyle/label/#verticalAlignment) - aligns constant line labels in the vertical direction. Applies to the constant lines belonging to the value axis.
<!--/fullDescription-->