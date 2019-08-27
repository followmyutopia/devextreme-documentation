---
id: dxChart.Options.barGroupPadding
type: Number
default: 0.3
---
---
##### shortDescription
Controls the padding and consequently the width of a group of bars with the same argument using relative units. Ignored if the [barGroupWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#barGroupWidth) option is set.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.RangeBarSeries

---
This option accepts a value from **0** to **1** that specifies the correlation between the empty space on a bar group's sides and the group's width: **0** - the bar group occupies the whole allocated space; **1** - virtually hides the bar group creating a lot of empty space.

#####See Also#####
- [Specify the Bar Width](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width)
- [barPadding](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#barPadding)