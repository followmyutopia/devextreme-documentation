<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Validates rules of the [validators](/Documentation/ApiReference/UI_Widgets/dxValidator/) that belong to the default validation group.
<!--/shortDescription-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
An object defining the result of validating the default group.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to validate the editors from the default validation group that combines the editors created by the [jQuery Approach](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/) and for which the **validationGroup** option is not specified.

The object returned by the **validateGroup(group)** function has the following structure.

- **isValid**  
 Indicates whether or not all the rules checked for the specified group are satisfied.

- **brokenRules**  
 An array of broken rules. The structure of rule objects is described in the [validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.

- **validators**  
 An array of **Validator** widgets that are included to the validated group.

To validate editors belonging to the default validation group and created using the **Knockout Approach**, call the [validateGroup(group)](/Documentation/ApiReference/Common/utils/validationEngine/Methods/#validateGroupgroup) method passing the view model as a parameter.

To validate editors belonging to the default validation group that are also created using the **AngularJS Approach**, call the [validateGroup(group)](/Documentation/ApiReference/Common/utils/validationEngine/Methods/#validateGroupgroup) method passing the **$scope** object as a parameter.
<!--/fullDescription-->