---
id: RangeRule.type
acceptValues: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async'
type: String
---
---
##### shortDescription
Specifies the type of the current rule.

---
Set this field to "range" to define a rule that will be broken if the validated value does not match the range specified by the [min](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RangeRule/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RangeRule/#max) configuration options.