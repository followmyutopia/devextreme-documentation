<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Area hover mode<!--/d-->
===========================================================================
<!--default-->'nearestPoint'<!--/default-->
<!--acceptValues-->'nearestPoint' | 'includePoints' | 'excludePoints' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies series elements to be highlighted when a user points to a series.
<!--/shortDescription-->

<!--fullDescription-->
When a user points to a series, it may react in one of the following ways depending on the value of the **hoverMode** option.

* **nearestPoint**   
The series changes its style. If series points are [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedSplineAreaSeries/point/#visible), the point nearest to the cursor also changes its style.
* **includePoints**   
The series changes its style. If series points are visible, all of them also change their style.
* **excludePoints**   
Only the series changes its style.
* **none**   
The series does not react to pointing to it.

[note]Points in full-stacked spline area series are hidden by default. To make them visible, assign *true* to the **point** | **visible** option.

#####See Also#####
- [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedSplineAreaSeries/hoverStyle/) - specifies the appearance of series in the hover state.
- **point** | [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedSplineAreaSeries/point/#hoverMode) - specifies the hover mode of series points.
<!--/fullDescription-->