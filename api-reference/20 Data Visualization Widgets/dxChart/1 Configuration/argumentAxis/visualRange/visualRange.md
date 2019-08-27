---
id: dxChart.Options.argumentAxis.visualRange
type: Object | Array<Number, String, Date>
inherits: VizRange
firedEvents: optionChanged
---
---
##### shortDescription
Defines the axis' displayed range. Cannot be wider than the [wholeRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/wholeRange/).

##### notUsedInTheme

---
#include dataviz-ref-vizrangevariants with {
    basepath: "/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange",
    objectName: "visualRange",
    element: "axis",
    elementType: "[argumentType](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType)"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/jQuery/Light/"
}

To specify the minimum visual range that a user can set, use the [minVisualRangeLength](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minVisualRangeLength/) option.

#####See Also#####
- [Visual and Whole Ranges](/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/)
- [visualRangeUpdateMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#visualRangeUpdateMode)
- [zoomAndPan](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/)
- [onZoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart) | [onZoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd)
- **Axis**.[visualRange()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRange)