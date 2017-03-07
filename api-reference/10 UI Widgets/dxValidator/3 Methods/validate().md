<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Validates value which is controlled by this validator against list of provided rules
<!--/d-->
<!--rd-->Validation result<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Validates the value of the editor that is controlled by the current **dxValidator** object against the list of the specified [validation rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules).
<!--/shortDescription-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object defining the validation result.
<!--/returnDescription-->

<!--fullDescription-->
The object returned by the **validate()** function has the following structure.

- **isValid**  
    Indicates whether all the rules checked for the validator are satisfied.
- **brokenRule**  
    The broken rule. The structure of the rule object is described in the [validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.
- **validator**  
    The current dxValidator widget.
- **value**  
    The current editor value.
- **validationRules**  
    An array of validation rules specified for the current validator. The structure of a rule object is described in the [validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.
<!--/fullDescription-->