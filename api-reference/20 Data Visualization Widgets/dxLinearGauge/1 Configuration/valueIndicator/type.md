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

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `GaugeIndicatorType` enum. This enum accepts the following values: `Rectangle`, `Circle`, `Rhombus`, `RangeBar`, `TriangleMarker` and `TextCloud`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/DifferentValueIndicatorTypesLinearGauge/jQuery/Light/"
}
<!--/fullDescription-->