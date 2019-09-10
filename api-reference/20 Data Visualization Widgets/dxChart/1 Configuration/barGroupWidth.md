---
id: dxChart.Options.barGroupWidth
type: Number
default: undefined
---
---
##### shortDescription
Specifies a fixed width for groups of bars with the same argument, measured in pixels. Takes precedence over the [barGroupPadding](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#barGroupPadding) option.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.RangeBarSeries

---
A bar's maximum width is limited. In single-series charts, it cannot be greater than the interval between two [major ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/). In multi-series charts, it depends on the number of bars in the parent group and this group's actual width. See the [Specify the Bar Width](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width) article for more information.

#####See Also#####
- [barWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#barWidth)
