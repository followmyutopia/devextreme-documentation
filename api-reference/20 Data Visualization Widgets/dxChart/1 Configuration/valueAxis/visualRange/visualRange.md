---
id: dxChart.Options.valueAxis.visualRange
type: Object | Array<Number, String, Date>
inherits: VizRange
firedEvents: optionChanged
---
---
##### shortDescription
Defines the axis' displayed range. Cannot be wider than the [wholeRange](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/wholeRange/wholeRange.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/wholeRange/').

##### notUsedInTheme

---
#include dataviz-ref-vizrangevariants with {
    basepath: "/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange",
    objectName: "visualRange",
    element: "axis",
    elementType: "[valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType')"
}

To specify the minimum visual range that a user can set, use the [minVisualRangeLength](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minVisualRangeLength/minVisualRangeLength.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minVisualRangeLength/') option.

The specified visual range is adjusted automatically when the argument axis is zoomed and panned. Set [adjustOnZoom](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/adjustOnZoom.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#adjustOnZoom') to **false** to disable this behavior.

#####See Also#####
- [Visual and Whole Ranges](/concepts/05%20Widgets/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/')
- [visualRangeUpdateMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#visualRangeUpdateMode')
- **Axis**.[visualRange()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRange)
- [zoomAndPan](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/zoomAndPan.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/')
- [onZoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart') | [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd')