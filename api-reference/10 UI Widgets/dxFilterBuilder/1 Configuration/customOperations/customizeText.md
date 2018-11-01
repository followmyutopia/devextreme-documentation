===========================================================================
<!--type-->function(fieldInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes the field value's text representation.
<!--/shortDescription-->

<!--fullDescription-->
#include uiwidgets-ref-functioncontext with { 
    value: "custom operation's configuration"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->fieldInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about a **FilterBuilder** field.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String | Number | Date<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The field's unformatted value (specified using the editor).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The value with the [format](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#format) applied.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->field<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->dxFilterBuilderField<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The field's configuration.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed.
<!--/typeFunctionReturnDescription-->