<!--id-->dxChart.Options.commonAxisSettings.stripStyle.paddingTopBottom<!--/id-->
===========================================================================
<!--default-->5<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Generates a pixel-measured empty space between the top/bottom border of a strip and the strip label.
<!--/shortDescription-->

<!--fullDescription-->
This option depends on the **label**.**verticalAlignment** in the following way.

- **verticalAlignment** is *"top"* &rarr; padding applies to the top border of a strip;       
- **verticalAlignment** is *"bottom"* &rarr; padding applies to the bottom border of a strip;      
- **verticalAlignment** is *"center"* &rarr; padding is calculated automatically.

![DevExtreme HTML5 Charts StripPadding](/Content/images/doc/19_1/ChartJS/StripPaddingTopBottom.png)

#####See Also#####
- **commonAxisSettings**.**stripStyle**.**label**.[verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/stripStyle/label/#verticalAlignment) - aligns strip labels in the vertical direction. Applies to all strips.
- **argumentAxis**.**stripStyle**.**label**.[verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/stripStyle/label/#verticalAlignment) - aligns strip labels in the vertical direction. Applies to the strips belonging to the argument axis.
- **valueAxis**.**stripStyle**.**label**.[verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/stripStyle/label/#verticalAlignment) - aligns strip labels in the vertical direction. Applies to the strips belonging to the value axis.
<!--/fullDescription-->