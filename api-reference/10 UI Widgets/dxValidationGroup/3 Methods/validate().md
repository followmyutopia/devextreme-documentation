===================================================================
===================================================================

<!--shortDescription-->
Validates rules of the [validators](/Documentation/ApiReference/UI_Widgets/dxValidator/) that belong to the current validation group.
<!--/shortDescription-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object defining the result of validating the current group.
<!--/returnDescription-->

<!--fullDescription-->
The object returned by the **validate()** function has the following structure.

- **isValid**  
    Indicates whether all the rules checked for the current group are satisfied.
- **brokenRules**  
    An array of broken rules. The structure of rule objects is described in the [validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.
- **validators**  
    An array of **Validator** widgets that are included in the validated group.

As an alternative to this method, you can use the [DevExpress.validationEngine.validateGroup(group)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateGroupgroup) function passing the current group as a parameter.
<!--/fullDescription-->