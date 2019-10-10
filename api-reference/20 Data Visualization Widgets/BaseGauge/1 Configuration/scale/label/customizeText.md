---
id: BaseGauge.Options.scale.label.customizeText
type: function(scaleValue)
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed in scale labels.

##### param(scaleValue): Object
Information on the scale value.

##### field(scaleValue.value): Number
The raw value.

##### field(scaleValue.valueText): String
The [formatted](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/label/format.md '{basewidgetpath}/Configuration/label/#format') value converted to a string.

##### return: String
The text for the label to display.

##### notUsedInTheme

---
#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/ScaleLabelFormatting/jQuery/Light/"
}

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting/Data%20Formatting.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')