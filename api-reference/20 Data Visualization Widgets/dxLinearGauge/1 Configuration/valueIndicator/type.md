<!--id-->dxLinearGauge.Options.valueIndicator.type<!--/id-->
===========================================================================
<!--default-->'rangeBar'<!--/default-->
<!--acceptValues-->'rectangle' | 'circle' | 'rhombus' | 'rangeBar' | 'triangleMarker' | 'textCloud'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of the value indicator.
<!--/shortDescription-->

<!--fullDescription-->
Different options of the **valueIndicator** configuration object can be set for different types of the value indicator. These options are listed within the [Indicator Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/) section.

#include common-ref-enum with {
    enum: "`GaugeIndicatorType`",
    values: "`RectangleNeedle`, `TriangleNeedle`, `TwoColorNeedle`, `RangeBar`, `TriangleMarker`, and `TextCloud`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/DifferentValueIndicatorTypesLinearGauge/jQuery/Light/"
}
<!--/fullDescription-->