---
id: dxChart.Options.crosshair.horizontalLine.label.customizeText
type: function(info)
---
---
##### shortDescription
Customizes the text displayed by the label that belongs to the horizontal crosshair line.

##### param(info): Object
Information about the point a user paused on.

##### field(info.point): chartPointObject
The [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/) object.

##### field(info.value): Date | Number | String
The raw point value.

##### field(info.valueText): String
The [formatted](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/label/#format) value converted to a string.

##### return: String
The text to be displayed in the label that belongs to the horizontal crosshair line.

##### notUsedInTheme

---
#include dataviz-ref-functioncontext