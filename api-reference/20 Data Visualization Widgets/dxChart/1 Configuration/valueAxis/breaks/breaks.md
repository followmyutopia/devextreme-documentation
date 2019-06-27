<!--id-->dxChart.Options.valueAxis.breaks<!--/id-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->Array<ScaleBreak><!--/type-->
<!--inherits-->..\..\..\..\ScaleBreak\ScaleBreak.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Declares a custom scale break collection. Applies only if the axis' [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type) is *"continuous"* or *"logarithmic"*.
<!--/shortDescription-->

<!--fullDescription-->
A scale break allows breaking off a part of the axis to improve the readability of a chart with high amplitude values.

![DevExtreme HTML5 JavaScript Charts Scale Breaks](/Content/images/doc/19_2/ChartJS/visual_elements/scale-breaks_val-axis.png)

Each object in the **breaks** array configures a single scale break. Note that a scale break is visible only if its range exceeds the tick interval.

#####See Also#####
- [breakStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/breakStyle/)
- [autoBreaksEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#autoBreaksEnabled)
<!--/fullDescription-->