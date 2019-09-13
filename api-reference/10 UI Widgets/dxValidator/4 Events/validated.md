---
id: dxValidator.validated
type: eventType
---
---
##### shortDescription
Raised after a value is validated.

##### param(validatedInfo): Object
Information about the event.

##### field(validatedInfo.brokenRule): RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule
The object representing the first broken rule in the list of the specified validation rules.

##### field(validatedInfo.isValid): Boolean
Indicates whether all the [rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules) checked for the value are satisfied.

##### field(validatedInfo.name): String
The value of the [name](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#name) option.

##### field(validatedInfo.status): 'valid' | 'invalid' | 'pending'
<!-- Description goes here -->

##### field(validatedInfo.validationRules): Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
An array of the validation rules specified for the current **dxValidator** object.

##### field(validatedInfo.value): Object
The validated value.

---
Main article: [onValidated](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#onSelectionChanged)

#####See Also#####
#include common-link-handleevents