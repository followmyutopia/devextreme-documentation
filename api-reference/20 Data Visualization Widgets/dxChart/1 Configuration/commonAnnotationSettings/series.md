<!--id-->dxChartCommonAnnotationConfig.series<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Anchors the annotation to a series point. Accepts the [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name) of the point's series.
<!--/shortDescription-->

<!--fullDescription-->
Use this option when the annotation is positioned relative to an [argument](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#argument).

For example, the following chart displays two series and an annotation. The annotation is positioned relative to the argument `B` but not anchored to any of the two series points that correspond to this argument:

    dataSource: [
        { arg: "A", val1: 5, val2: 5.5 },
        { arg: "B", val1: 3, val2: 6.5 },
        { arg: "C", val1: 3.5, val2: 4.5 }
    ],
    series: [
        { valueField: "val1", name: "Series 1" },
        { valueField: "val2", name: "Series 2" }
    ],
    annotations: [{
        type: "text",
        text: "Text annotation",
        argument: "B"
    }]

![DevExtreme Chart: Positioning an annotation relative to an argument](/Content/images/doc/19_2/ChartJS/visual_elements/annotation-positioned-against-argument.png)

To anchor the annotation to one of these series points, specify the annotation's **series**. For instance, the following code anchors the annotation to the point of `Series 1`:

    annotations: [{
        type: "text",
        text: "Text annotation",
        argument: "B",
        series: "Series 1"
    }]

![DevExtreme Chart: An annotation anchored to a series point](/Content/images/doc/19_2/ChartJS/visual_elements/annotation-positioned-against-series1.png)

#####See Also#####
- [x](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#x) | [y](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#y)
- [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#value)
<!--/fullDescription-->