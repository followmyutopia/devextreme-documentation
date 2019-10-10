Subvalue indicators are pointers that indicate extra values on the **LinearGauge**. These extra values are called *"subvalues"*. There is a set of predefined subvalue indicator types for the **LinearGauge** widget.

- [Circle](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/Circle/Circle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Circle/')
- [RangeBar](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/RangeBar/RangeBar.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/RangeBar/')
- [Rectangle](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/Rectangle/Rectangle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rectangle/')
- [Rhombus](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/Rhombus/Rhombus.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rhombus/')
- [TextCloud](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/TextCloud/TextCloud.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/TriangleMarker/TriangleMarker.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TriangleMarker/')

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/gaugeslineargaugeslineargaugebasicelementsdifferentsubvalueindicatortypes/"
}

In order to customize the appearance of the subvalue indicators, use the [subvalueIndicator](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/1%20Configuration/subvalueIndicator/subvalueIndicator.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/subvalueIndicator/') configuration object. Set its **type** option and then the required type-specific options. The type-specific options are listed within the widget's [Indicator Types](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/Indicator%20Types.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/') reference section. 

	<!--JavaScript-->var gaugeOptions = {
        subvalueIndicator: {
            type: 'textCloud',
			// Set type-specific options here
        }
    };

[note] Although the **LinearGauge** can indicate several subvalues at once, you cannot customize a particular subvalue indicator. The options specified by the **subvalueIndicator** object apply to all subvalue indicators.