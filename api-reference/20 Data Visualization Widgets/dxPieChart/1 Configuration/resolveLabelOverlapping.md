---
id: dxPieChart.Options.resolveLabelOverlapping
acceptValues: 'hide' | 'none' | 'shift'
type: String
default: 'none'
---
---
##### shortDescription
Specifies how a chart must behave when [point labels](/Documentation/Guide/Widgets/PieChart/Point_Labels/Overview/) overlap.

---
Series point labels display series point values. If the series in your pie chart contains a large number of points, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically. To resolve overlapping by shifting labels from their positions, set the **resolveLabelOverlapping** option to *'shift'*. In this case, it is recommended that you display label [connectors](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/connector/) so that pie segments are connected with their labels. If there is not enough space for all labels after they are shifted, labels with the smallest values will be hidden.

[note] If the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#position) option is set to *"inside"*, the *"shift"* mode in label overlapping is not available.

#include common-ref-enum with {
    enum: "`PieChartResolveLabelOverlapping`",
    values: "`None`, `Hide`, and `Shift`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartspieseriespiewithoverlappinglabels/"
}