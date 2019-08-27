---
id: CompareRule.type
acceptValues: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email'
type: String
---
---
##### shortDescription
Specifies the type of the current rule.

---
Set this field to "compare" to define a rule that will be broken if the validated value does not equal to the return value of the specified [comparisonTarget](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonTarget) function.