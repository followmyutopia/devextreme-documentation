---
id: dxChartSeriesTypes.CommonSeries.label.position
acceptValues: 'inside' | 'outside'
type: String
default: 'outside'
---
---
##### shortDescription
Specifies whether to display point labels inside or outside of series points. Applies only to bubble, range-like and bar-like series.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.RangeBarSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.BubbleSeries

---
[note]The default value for [*full-stacked bar*](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/) and [*stacked bar*](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/) series is *'inside'*.

#include common-ref-enum with {
    enum: "`RelativePosition`",
    values: "`Inside` and `Outside`"
}