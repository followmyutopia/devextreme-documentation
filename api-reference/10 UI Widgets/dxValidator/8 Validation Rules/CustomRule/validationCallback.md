<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
A function that validates the target value.
<!--/shortDescription-->

<!--fullDescription-->
In this function, you should indicate whether or not the validated value breaks the current rule. To access the validated value, use the **value** field of the parameter passed to the function. To access the current rule, use the **rule** field of the function parameter. Set the rule's **isValid** field. In addition, you can specify the rule's **message** field, as well as other fields that are specific for the current rule type, which is specified by the rule's **type** field.

As an alternative to the rule's **isValid** field, you can use the function's return value to specify the validation result.

<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object defining validation parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string|number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The validated value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->rule<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The current rule object that exposes user-defined options, the <b>isValid</b> and <b>message</b> fields, and the rule type specific fields.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->validator<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxValidator">dxValidator</a> object that caused the validation.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->true|false<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Boolean value that indicates whether the validated value is valid against the checked rule.
<!--/typeFunctionReturnDescription-->