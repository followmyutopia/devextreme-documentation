===========================================================================
<!--default-->'triangleMarker'<!--/default-->
<!--acceptValues-->'rectangle' | 'circle' | 'rhombus' | 'rangeBar' | 'triangleMarker' | 'textCloud'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of subvalue indicators.
<!--/shortDescription-->

<!--fullDescription-->
Different options of the **subvalueIndicator** configuration object can be set for different types of the subvalue indicators. These options are listed within the [Indicator Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/) section.

#include common-ref-enum with {
    enum: "`GaugeIndicatorType`",
    values: "`RectangleNeedle`, `TriangleNeedle`, `TwoColorNeedle`, `RangeBar`, `TriangleMarker`, and `TextCloud`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypesLinearGauge/jQuery/Light/"
}
<!--/fullDescription-->