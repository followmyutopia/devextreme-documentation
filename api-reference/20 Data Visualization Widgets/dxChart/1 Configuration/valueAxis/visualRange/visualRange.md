---
id: dxChart.Options.valueAxis.visualRange
type: Object | Array<Number, String, Date>
inherits: VizRange
firedEvents: optionChanged
---
---
##### shortDescription
Defines the axis' displayed range. Cannot be wider than the [wholeRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/wholeRange/).

##### notUsedInTheme

---
#include dataviz-ref-vizrangevariants with {
    basepath: "/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange",
    objectName: "visualRange",
    element: "axis",
    elementType: "[valueType](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType)"
}

To specify the minimum visual range that a user can set, use the [minVisualRangeLength](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minVisualRangeLength/) option.

The specified visual range is adjusted automatically when the argument axis is zoomed and panned. Set [adjustOnZoom](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#adjustOnZoom) to **false** to disable this behavior.

#####See Also#####
- [Visual and Whole Ranges](/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/)
- [visualRangeUpdateMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#visualRangeUpdateMode)
- **Axis**.[visualRange()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRange)
- [zoomAndPan](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/)
- [onZoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart) | [onZoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd)