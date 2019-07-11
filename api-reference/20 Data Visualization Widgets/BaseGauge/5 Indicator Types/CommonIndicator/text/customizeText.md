<!--id-->CommonIndicator.text.customizeText<!--/id-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--propertyOf-->circularRangeBar,linearRangeBar,circularTextCloud,linearTextCloud<!--/propertyOf-->
<!--default-->undefined<!--/default-->
<!--type-->function(indicatedValue)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed in an indicator.
<!--/shortDescription-->

<!--fullDescription-->
#include dataviz-ref-functioncontext
<!--/fullDescription-->
<!--typeFunctionParamName1-->indicatedValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the indicated value.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The raw value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The formatted value converted to a string.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the indicator to display.
<!--/typeFunctionReturnDescription-->