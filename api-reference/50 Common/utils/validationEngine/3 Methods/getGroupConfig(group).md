<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Get validation group configuration object.
<!--/d-->
<!--p1d-->Key of validation group which should be validated.<!--/p1d-->
<!--rd-->A group configuration object.  group (string|object), validators ([]), validate(), validated ($.Callbacks)<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Provides access to the object that represents the specified validation group.
<!--/shortDescription-->

<!--paramName1-->group<!--/paramName1-->
<!--paramType1-->string|object<!--/paramType1-->
<!--paramDescription1-->
The key of the requested group.
<!--/paramDescription1-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
An object representing the requested group.
<!--/returnDescription-->

<!--fullDescription-->
A validation group's key can be represented in the following manner.

- A **ValidationGroup** instance  
	If it is not accessible in the current context in code, access it in the following manner.

		<!--JavaScript-->$("#myGroup").dxValidationGroup("instance"))

- A string name  
	When you use the jQuery approach for validation, a validation group is usually a string because it is the simplest way to unite several widgets in one group - by setting the same group name for the **validationGoup** configuration option of the associated dxValidator objects. In this and other similar cases, where you specify a validation group as a string, pass the validation group name as a parameter to the **validateGroup(group)** function.

The object returned by the **getGroupConfig(group)** function has the following structure.

- **group**  
	The string or object passed as the parameter.
- **validators**  
	An array of dxValidator widgets that are included to the validated group.
- **validate()**   
	The method that allows you to validate the widgets included to the current group.
- **validated**  
	The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.

<!--/fullDescription-->