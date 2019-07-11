<!--id-->dxChartSeriesTypes.CommonSeries.point.selectionMode<!--/id-->
===========================================================================
<!--propertyOf-->dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries<!--/propertyOf-->
<!--default-->'onlyPoint'<!--/default-->
<!--acceptValues-->'allArgumentPoints' | 'allSeriesPoints' | 'none' | 'onlyPoint'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies series elements to be highlighted when a user selects a series point.
<!--/shortDescription-->

<!--fullDescription-->
[note]Though not provided out of the box, the selection capability can be implemented using the widget API. Refer to the [onPointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick) option description for details.

When a user selects a series point, this and other series points may react in one of the following ways depending on the value of the **selectionMode** option.

* **onlyPoint**   
Only the selected point changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The selected point changes its style. Points with the same argument do it as well.
* **none**   
The point does not react to selecting.

#include common-ref-enum with {
    enum: "`ChartPointInteractionMode`",
    values: "`OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`"
}

#####See Also#####
- [pointSelectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pointSelectionMode) - specifies whether only one or several points can stay selected.
- [pointSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointSelectionChanged) - an event that fires after the selection state of a point has been changed.
<!--/fullDescription-->