Subvalue indicators are pointers that indicate extra values on the **CircularGauge**. These extra values are called *"subvalues"*. There is a set of predefined subvalue indicator types for the **CircularGauge** widget.

- [RangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RangeBar/)
- [RectangleNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RectangleNeedle/)
- [TextCloud](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TextCloud/)
- [TriangleMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleMarker/)
- [TriangleNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleNeedle/)
- [TwoColorNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TwoColorNeedle/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementsdifferentsubvalueindicatortypes/"
}

In order to customize the appearance of the subvalue indicators, use the [subvalueIndicator](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/subvalueIndicator/) configuration object. Set its **type** option and then the required type-specific options. The type-specific options are listed within the widget's [Indicator Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/) reference section. 

	<!--JavaScript-->var gaugeOptions = {
        subvalueIndicator: {
            type: 'textCloud',
			// Set type-specific options here
        }
    };

[note] Although the **CircularGauge** can indicate several subvalues at once, you cannot customize a particular subvalue indicator. The options specified by the **subvalueIndicator** object apply to all subvalue indicators.