---
id: dxChartSeriesTypes.CommonSeries.minBarSize
type: Number
default: undefined
---
---
##### shortDescription
Specifies the minimal possible height (or length if the chart is [rotated](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated)) of a bar in pixels. Applies only to bar-like series.

##### propertyOf
dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.BarSeries

---
If the disparity between the smallest and largest values in the data source is considerable, small values are visualized by tiny bars that may be difficult to interact with. In this case, specify the minimal possible height (or length if the chart is rotated) for bars using the **minBarSize** option.

#####See Also#####
- [barPadding](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#barPadding)
- [barWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#barWidth)