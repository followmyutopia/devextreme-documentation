===================================================================
===================================================================

<!--shortDescription-->
Validates editors from a specific validation group.
<!--/shortDescription-->

<!--paramName1-->group<!--/paramName1-->
<!--paramType1-->String|Object<!--/paramType1-->
<!--paramDescription1-->
The validation group's key.
<!--/paramDescription1-->

<!--returnType-->dxValidationGroupResult<!--/returnType-->
<!--returnDescription-->
The validation result.
<!--/returnDescription-->

<!--fullDescription-->
A validation group's key can be represented in the following manner.

- A **ValidationGroup** instance  
 If it is not accessible in the current context in code, access it in the following manner.

        <!--JavaScript-->$("#myGroup").dxValidationGroup("instance")

- A string name  
 When you use the jQuery approach for validation, a validation group is usually a string because it is the simplest way to unite several widgets in one group - by setting the same group name for the **validationGroup** configuration option of the associated **dxValidator** objects. In this and other similar cases, where you specify a validation group as a string, pass the validation group name as a parameter to the **validateGroup(group)** function.

#include uiwidgets-ref-validate-result

#####See Also#####
- [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules)
<!--/fullDescription-->