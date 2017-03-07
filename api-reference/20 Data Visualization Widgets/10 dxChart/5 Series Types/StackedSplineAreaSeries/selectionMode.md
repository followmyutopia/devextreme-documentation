<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Area selection mode<!--/d-->
===========================================================================
<!--default-->'includePoints'<!--/default-->
<!--acceptValues-->'includePoints' | 'excludePoints' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies series elements to be highlighted when a user selects a series.
<!--/shortDescription-->

<!--fullDescription-->
[note]Though not provided out of the box, the selection capability can be implemented using the widget API. Refer to the [onSeriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick) option description for details.

When a user selects a series, it may react in one of the following ways depending on the value of the **selectionMode** option.

* **includePoints**   
The series changes its style. If series points are [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/point/#visible), all of them also change their style.
* **excludePoints**   
Only the series changes its style.
* **none**   
The series does not react in any way.

[note]Points in stacked spline area series are hidden by default. To make them visible, assign *true* to the **point** | **visible** option.

#####See Also#####
- [seriesSelectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#seriesSelectionMode) - specifies whether only one or several series can stay selected.
- **series** | [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/selectionStyle/) - specifies the appearance of a series in the selected state.
- **series** | **point** | [selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/point/#selectionMode) - specifies the selection mode of series points.
- [seriesSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesSelectionChanged) - an event that fires after the selection state of a series has been changed.
<!--/fullDescription-->