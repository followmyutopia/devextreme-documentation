<!--id-->dxPolarChart.Options.commonAxisSettings.discreteAxisDivisionMode<!--/id-->
===========================================================================
<!--default-->'betweenLabels'<!--/default-->
<!--acceptValues-->'betweenLabels' | 'crossLabels'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether ticks/grid lines of a discrete axis are located between labels or cross the labels.
<!--/shortDescription-->

<!--fullDescription-->
When a discrete axis is divided, its ticks/grid lines are located between labels by default. If this is not appropriate, use the **discreteAxisDivisionMode** property to set the required mode for positioning ticks and grid lines on a discrete axis.

[note]This option is not designed to work in the [spider web](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#useSpiderWeb) mode.

#include common-ref-enum with {
    enum: "`DiscreteAxisDivisionMode`",
    values: "`BetweenLabels` and `CrossLabels`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartspolarandradarchartspolarandradarchartswindrose/"
}
<!--/fullDescription-->