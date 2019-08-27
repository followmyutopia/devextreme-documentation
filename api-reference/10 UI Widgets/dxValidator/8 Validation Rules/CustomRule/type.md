---
id: CustomRule.type
acceptValues: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email'
type: String
---
---
##### shortDescription
Specifies the type of the current rule.

---
Set this field to "custom" to define a rule that will be broken as a result of custom validation performed by the [validationCallback](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/#validationCallback) function.