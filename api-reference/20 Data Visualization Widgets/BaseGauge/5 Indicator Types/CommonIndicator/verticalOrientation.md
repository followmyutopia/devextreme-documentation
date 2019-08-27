---
id: CommonIndicator.verticalOrientation
acceptValues: 'bottom' | 'top'
type: String
default: 'bottom' (value_indicators), 'top' (subvalue_indicators)
---
---
##### shortDescription
Specifies the orientation of the *rangeBar* indicator. Applies only if the **geometry**.[orientation](/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/geometry/#orientation) option is *"horizontal"*.

##### propertyOf
linearRangeBar

---
This option specifies the orientation of an indicator relative to an invisible scale line.

#include common-ref-enum with {
    enum: "`VerticalEdge`",
    values: "`Top` and `Bottom`"
}