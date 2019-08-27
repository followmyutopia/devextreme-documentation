---
id: dxLinearGauge.Options.subvalueIndicator
type: Object
inherits: GaugeIndicator
inheritAll: 
---
---
##### shortDescription
Specifies the appearance options of subvalue indicators.

---
The **LinearGauge** widget can display one main [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/#value) and several [subvalues](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/#subvalues). The gauge's main value and subvalues are indicated by special pointers. You can customize the appearance of these pointers using the [valueIndicator](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/valueIndicator/) and **subvalueIndicator** configuration objects correspondingly.

The subvalue indicator is a pointer, which designates an extra value on a scale. There are several types of subvalue indicators. Set the required one by using the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/subvalueIndicator/#type) option, and then specify the options that are specific to this type, if needed. To learn the options that can be specified for a particular type, refer to one of the following sections.

- [Circle](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Circle/)
- [RangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/RangeBar/)
- [Rectangle](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rectangle/)
- [Rhombus](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rhombus/)
- [TextCloud](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TextCloud/)
- [TriangleMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TriangleMarker/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/gaugeslineargaugeslineargaugebasicelementsdifferentsubvalueindicatortypes/"
}