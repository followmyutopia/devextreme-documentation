<!--id-->dxCircularGauge.Options.subvalueIndicator.type<!--/id-->
===========================================================================
<!--default-->'triangleMarker'<!--/default-->
<!--acceptValues-->'rectangleNeedle' | 'triangleNeedle' | 'twoColorNeedle' | 'rangeBar' | 'triangleMarker' | 'textCloud'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of subvalue indicators.
<!--/shortDescription-->

<!--fullDescription-->
Different options of the **subvalueIndicator** configuration object can be set for different types of the subvalue indicators. These options are listed within the [Indicator Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/) section.

#include common-ref-enum with {
    enum: "`GaugeIndicatorType`",
    values: "`RectangleNeedle`, `TriangleNeedle`, `TwoColorNeedle`, `RangeBar`, `TriangleMarker`, and `TextCloud`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypes/jQuery/Light/"
}
<!--/fullDescription-->