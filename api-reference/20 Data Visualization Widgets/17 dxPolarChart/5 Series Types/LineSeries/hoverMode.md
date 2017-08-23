<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'excludePoints'<!--/default-->
<!--acceptValues-->'nearestPoint' | 'includePoints' | 'excludePoints' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies series elements to be highlighted when a user points to the series.
<!--/shortDescription-->

<!--fullDescription-->
When a user points to the series, it may react in one of the following ways depending on the value of the **hoverMode** option.

* **nearestPoint**   
The series changes its style along with the point that is nearest to the cursor.
* **includePoints**   
The series changes its style along with all the points.
* **excludePoints**   
The series changes its style, but the points do not.
* **none**   
The series does not react to pointing to it.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartSeriesHoverMode` enum with one of the following values: `NearestPoint`, `IncludePoints`, `ExcludePoints`, and `None`. Note that although this enum accepts more values, only the listed ones can be applied to a line series.

#####See Also#####
- [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/hoverStyle/)
- **point**.[hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/point/#hoverMode)
<!--/fullDescription-->