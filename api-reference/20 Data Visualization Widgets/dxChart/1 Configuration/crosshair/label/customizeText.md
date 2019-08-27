---
id: dxChart.Options.crosshair.label.customizeText
type: function(info)
---
---
##### shortDescription
Customizes the text displayed by the crosshair labels.

##### param(info): Object
Information about the point a user paused on.

##### field(info.point): chartPointObject
The [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/) object.

##### field(info.value): Date | Number | String
The raw argument value.

##### field(info.valueText): String
The [formatted](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/label/#format) value converted to a string.

##### return: String
The text for the crosshair label to display.

##### notUsedInTheme

---
This option accepts a function that will be called twice on each point - once for the horizontal line, and then for the vertical. To specify an individual function, which will be called for the horizontal or vertical line separately, use the **customizeText** option within [horizontalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/).**label** or [verticalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/).**label** object. 

#include dataviz-ref-functioncontext