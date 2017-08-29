<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'includePoints'<!--/default-->
<!--acceptValues-->'includePoints' | 'excludePoints' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies series elements to be highlighted when a user selects the series.
<!--/shortDescription-->

<!--fullDescription-->
When a user selects the series, it may react in one of the following ways depending on the value of the **selectionMode** option.

* **includePoints**   
The series changes its style along with all the points.
* **excludePoints**   
The series changes its style, but the points do not.
* **none**   
The series does not react to selection.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartSeriesSelectionMode` enum with one of the following values: `IncludePoints`, `ExcludePoints`, and `None`. Note that although this enum accepts more values, only the listed ones can be applied to a line series.

#####See Also#####
- [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/selectionStyle/)
- **point**.[selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/point/#selectionMode)
<!--/fullDescription-->