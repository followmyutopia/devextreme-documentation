---
id: CompareRule.comparisonType
acceptValues: '!=' | '!==' | '<' | '<=' | '==' | '===' | '>' | '>='
type: String
default: '=='
---
---
##### shortDescription
Specifies the operator to be used for comparing the validated value with the [target](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonTarget).

---
#include common-ref-enum with {
    enum: "`ComparisonOperator`",
    values: "`Equal`, `NotEqual`, `StrictEqual`, `NotStrictEqual`, `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`"
}