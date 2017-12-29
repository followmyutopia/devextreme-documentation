Subvalue indicators are pointers that indicate extra values on the **LinearGauge**. These extra values are called *"subvalues"*. There is a set of predefined subvalue indicator types for the **LinearGauge** widget.

- [Circle](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Circle/)
- [RangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/RangeBar/)
- [Rectangle](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rectangle/)
- [Rhombus](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rhombus/)
- [TextCloud](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TextCloud/)
- [TriangleMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TriangleMarker/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/gaugeslineargaugeslineargaugebasicelementsdifferentsubvalueindicatortypes/"
}

In order to customize the appearance of the subvalue indicators, use the [subvalueIndicator](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/subvalueIndicator/) configuration object. Set its **type** option and then the required type-specific options. The type-specific options are listed within the widget's [Indicator Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/) reference section. 

	<!--JavaScript-->var gaugeOptions = {
        subvalueIndicator: {
            type: 'textCloud',
			// Set type-specific options here
        }
    };

[note] Although the **LinearGauge** can indicate several subvalues at once, you cannot customize a particular subvalue indicator. The options specified by the **subvalueIndicator** object apply to all subvalue indicators.