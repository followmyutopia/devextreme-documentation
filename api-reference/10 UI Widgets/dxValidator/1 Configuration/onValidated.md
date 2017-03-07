<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Function is called after value was validated against given rules<!--/d-->
<!--EventForAction-->..\4 Events\validated.md<!--/EventForAction-->
===========================================================================
<!--type-->function(validatedInfo)<!--/type-->
<!--fp1d-->Information on selected rows.<!--/fp1d-->
<!--fp1_field1d-->Name of dxValidator<!--/fp1_field1d-->
<!--fp1_field2d-->Flag which marks given value as valid or not valid<!--/fp1_field2d-->
<!--fp1_field3d-->Value which was validated<!--/fp1_field3d-->
<!--fp1_field4d-->Array of validation rules for this validator<!--/fp1_field4d-->
<!--fp1_field5d-->First broken rule<!--/fp1_field5d-->
===========================================================================

<!--shortDescription-->
A handler for the [validated](/Documentation/ApiReference/UI_Widgets/dxValidator/Events/#validated) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action after an editor value is validated against the specified [validation rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules).
<!--/fullDescription-->
<!--typeFunctionParamName1-->selectedRowsInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->name<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The value of the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxValidator/Configuration/#name">name</a> option.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->isValid<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->boolean<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates whether all the rules checked for the value are satisfied.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->value<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The validated value.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->validationRules<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of validation rules specified for the current dxValidator object.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->brokenRule<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The object representing the first broken rule on the list of specified validation rules.
<!--/typeFunctionParamDescription1_field5-->
