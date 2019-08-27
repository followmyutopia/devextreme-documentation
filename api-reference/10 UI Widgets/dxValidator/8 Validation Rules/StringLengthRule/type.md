---
id: StringLengthRule.type
acceptValues: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email'
type: String
---
---
##### shortDescription
Specifies the type of the current rule.

---
Set this field to "stringLength" to define a rule that will be broken if the validated value length does not match to the range specified by the [min](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/StringLengthRule/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/StringLengthRule/#max) configuration options.