===========================================================================
<!--default-->0.7<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the minimum diameter of the pie.
<!--/shortDescription-->

<!--fullDescription-->
This option specifies the minimum ratio between the pie's diameter and the widget's width or height (depending on which of them is less). For example, assume that the widget's size is 300x500 pixels and the **minDiameter** option is 0.7. Then, the diameter of the pie will never be less than: 

*0.7 * min(300,500) = 0.7 * 300 = 210 pixels*

[note]This option is ignored if the [diameter](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#diameter) option is set.

#####See Also#####
- [size](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/size/)
- [sizeGroup](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#sizeGroup)
<!--/fullDescription-->