---
id: dxChartSeriesTypes.CommonSeries.barPadding
type: Number
default: undefined
---
---
##### shortDescription
Controls the padding and consequently the width of all bars in a series using relative units. Ignored if the [barWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#barWidth) option is set.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.RangeBarSeries

---
This option accepts a value from **0** to **1** that specifies the correlation between the empty space on a bar's sides and the bar's width: **0** - the bar occupies the whole allocated space; **1** - virtually hides the bar creating a lot of empty space.

#####See Also#####
- [Specify the Bar Width](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width)
- [barGroupPadding](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#barGroupPadding)
- **series**.[minBarSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#minBarSize)