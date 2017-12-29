A value indicator is a pointer that designates the [main value](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/#value) on the **CircularGauge**. There is a set of predefined value indicator types for this widget.

- [RangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RangeBar/)
- [RectangleNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RectangleNeedle/)
- [TextCloud](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TextCloud/)
- [TriangleMarker](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleMarker/)
- [TriangleNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleNeedle/)
- [TwoColorNeedle](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TwoColorNeedle/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementsdifferentvalueindicatortypes/"
}

In order to customize the appearance of a value indicator, use the [valueIndicator](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/valueIndicator/) configuration object. Set its **type** option and then the required type-specific options. The type-specific options are listed within the widget's [Indicator Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/) reference section. 

	<!--JavaScript-->var gaugeOptions = {
        valueIndicator: {
            type: 'rangeBar',
			// Set type-specific options here
        }
    };


