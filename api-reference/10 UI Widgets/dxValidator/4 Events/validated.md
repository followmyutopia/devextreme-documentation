<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->event<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after an editor value is validated against the specified [validation rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules).
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onValidated](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#onSelectionChanged) option to handle the event.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
<!--/fullDescription-->
<!--typeFunctionParamName1-->selectedRowsInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->name<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The value of the [name](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#name) option.
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
An array of the validation rules specified for the current **dxValidator** object.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->brokenRule<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The object representing the first broken rule in the list of the specified validation rules.
<!--/typeFunctionParamDescription1_field5-->
