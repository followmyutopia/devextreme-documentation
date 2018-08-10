===========================================================================
<!--type-->Object<!--/type-->
<!--inherits-->..\..\..\BaseGauge\5 Indicator Types\GaugeIndicator\GaugeIndicator.md<!--/inherits-->
<!--inheritAll--><!--/inheritAll-->
===========================================================================

<!--shortDescription-->
Specifies the appearance options of subvalue indicators.
<!--/shortDescription-->

<!--fullDescription-->
The **CircularGauge** widget can display one main [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/#value) and several [subvalues](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/#subvalues). The gauge's main value and subvalues are indicated by special pointers. You can customize the appearance of these pointers using the [valueIndicator](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/valueIndicator/) and **subvalueIndicator** configuration objects correspondingly.

The subvalue indicator is a pointer which designates an extra value on a scale. There are several types of subvalue indicators. Set the required one by using the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/subvalueIndicator/#type) option, and then specify the options that are specific to this type, if needed. To learn about the options that can be specified for a particular type, refer to one of the following sections.

- [RangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RangeBar/)
- [RectangleNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RectangleNeedle/)
- [TextCloud](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TextCloud/)
- [TriangleMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleMarker/)
- [TriangleNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleNeedle/)
- [TwoColorNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TwoColorNeedle/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypes/jQuery/Light/"
}
<!--/fullDescription-->