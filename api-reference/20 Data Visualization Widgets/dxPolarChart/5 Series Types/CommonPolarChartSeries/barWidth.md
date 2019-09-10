---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.barWidth
type: Number
default: undefined
---
---
##### shortDescription
Specifies a fixed angular width for all bars in a series, measured in degrees. Takes precedence over the [barPadding](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#barPadding) option.

##### propertyOf
dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.stackedbarpolarseries

---
A bar's maximum width is limited. In single-series charts, it cannot be greater than the interval between two [major ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/). In multi-series charts, it depends on the number of bars in the parent group and this group's actual width. See the [Specify the Bar Width](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width) article for more information.

#####See Also#####
- [barGroupWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#barGroupWidth)
- **series**.[minBarSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#minBarSize)
