---
id: dxPolarChart.Options.resolveLabelOverlapping
acceptValues: 'hide' | 'none'
type: String
default: 'none'
---
---
##### shortDescription
Specifies how the chart must behave when [series point labels](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels) overlap.

---
Series point labels display series point values. If your chart contains several series with a large number of points in each, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically.

#include common-ref-enum with {
    enum: "`PolarChartResolveLabelOverlapping`",
    values: "`None` and `Hide`"
}