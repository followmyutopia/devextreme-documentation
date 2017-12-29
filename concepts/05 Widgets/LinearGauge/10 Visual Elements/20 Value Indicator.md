A value indicator is a pointer that designates the [main value](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/#value) on the **LinearGauge**. There is a set of predefined value indicator types for this widget.

- [Circle](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Circle/)
- [RangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/RangeBar/)
- [Rectangle](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rectangle/)
- [Rhombus](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rhombus/)
- [TextCloud](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TextCloud/)
- [TriangleMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TriangleMarker/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/gaugeslineargaugeslineargaugebasicelementsdifferentvalueindicatortypes/"
}

In order to customize the appearance of a value indicator, use the [valueIndicator](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/valueIndicator/) configuration object. Set its **type** option and then the required type-specific options. The type-specific options are listed within the widget's [Indicator Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/) reference section. 

	<!--JavaScript-->var gaugeOptions = {
        valueIndicator: {
            type: 'rangeBar',
			// Set type-specific options here
        }
    };


