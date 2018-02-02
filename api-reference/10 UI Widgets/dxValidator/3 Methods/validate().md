===================================================================
===================================================================

<!--shortDescription-->
Validates the value of the editor that is controlled by the current **Validator** object against the list of the specified [validation rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules).
<!--/shortDescription-->

<!--returnType-->dxValidatorResult<!--/returnType-->
<!--returnDescription-->
The validation result.
<!--/returnDescription-->

<!--fullDescription-->
The object returned by the **validate()** function has the following structure.

- **isValid**  
    Indicates whether all the rules checked for the validator are satisfied.
- **brokenRule**  
    The broken rule. The structure of the rule object is described in the [validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.
- **validator**  
    The current **Validator** widget.
- **value**  
    The current editor value.
- **validationRules**  
    An array of validation rules specified for the current validator. The structure of a rule object is described in the [validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.
<!--/fullDescription-->