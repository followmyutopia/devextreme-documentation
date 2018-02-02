<!--dep-->..\5 Series Types\CommonSeries\ignoreEmptyPoints.md<!--/dep-->
===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether all bars should have equal width, even if some values are missing from a series. Applies only to bar-like series.
<!--/shortDescription-->

<!--fullDescription-->
If a value in a series equals to zero or is undefined, the bar visualizing this value will not be displayed on the chart making an empty space. If you need to fill this space by extending the neighbouring bars, set the **equalBarWidth** option to **false**.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/AutoCalculatedBarWidth/jQuery/Light/"
}

#####See Also#####
- [barWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#barWidth) - controls the width of bars when **equalBarWidth** is **true**.
- **series**.[minBarSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#minBarSize) - sets the minimal possible height for bars in a bar-like series.
<!--/fullDescription-->