<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Resets the values and validation result of the editors that belong to the specified validation group.
<!--/shortDescription-->

<!--paramName1-->group<!--/paramName1-->
<!--paramType1-->string|object<!--/paramType1-->
<!--paramDescription1-->
The key of the requested group.
<!--/paramDescription1-->

<!--fullDescription-->
This method calls the [reset](/Documentation/ApiReference/UI_Widgets/dxValidationGroup/Methods/#reset) method for the specified group.

A validation group's key can be represented in the following manner.

- A **ValidationGroup** instance  
    If it is not accessible in the current context in code, access it in the following manner.

        <!--JavaScript-->$("#myGroup").dxValidationGroup("instance")

- A string name  
    When you use the jQuery approach for validation, a validation group is usually a string because it is the simplest way to unite several widgets in one group - by setting the same group name for the **validationGoup** configuration option of the associated **dxValidator** objects. In this and other similar cases, where you specify a validation group as a string, pass the validation group name as a parameter to the **validateGroup(group)** function.

<!--/fullDescription-->