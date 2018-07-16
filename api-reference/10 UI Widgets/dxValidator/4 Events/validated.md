===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised after a value is validated.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onValidated](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#onSelectionChanged)

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->validatedInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->name<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The value of the [name](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#name) option.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->isValid<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Boolean<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates whether all the [rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules) checked for the value are satisfied.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->value<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The validated value.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->validationRules<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule><!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of the validation rules specified for the current **dxValidator** object.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->brokenRule<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->RequiredRule|NumericRule|RangeRule|StringLengthRule|CustomRule|CompareRule|PatternRule|EmailRule<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The object representing the first broken rule in the list of the specified validation rules.
<!--/typeFunctionParamDescription1_field5-->
