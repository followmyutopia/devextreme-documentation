===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the widget used to edit the field value.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->conditionInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about a **FilterBuilder** field.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String | Number | Date<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The editor's value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->field<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxFilterBuilderField<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The field's configuration.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->setValue<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->function()<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
A method that you should call to change the field value after the editor value changes.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionParamName2-->container<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->