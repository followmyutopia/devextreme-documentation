---
id: dxChart.Options.argumentAxis.breaks
type: Array<ScaleBreak>
inherits: ScaleBreak
default: undefined
---
---
##### shortDescription
Declares a scale break collection. Applies only if the axis' [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type) is *"continuous"* or *"logarithmic"*.

##### notUsedInTheme

---
A scale break allows breaking off a part of the axis to improve the readability of a chart with high amplitude values.

![DevExtreme HTML5 JavaScript Charts Scale Breaks](/Content/images/doc/19_2/ChartJS/visual_elements/scale-breaks_arg-axis.png)

Each object in the **breaks** array configures a single scale break. Note that a scale break is visible only if its range exceeds the tick interval.

#####See Also#####
- [breakStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/breakStyle/)