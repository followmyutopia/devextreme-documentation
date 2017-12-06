<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--propertyOf-->..\..\..\..\dxCircularGauge\5 Indicator Types\RangeBar\RangeBar.md,..\..\..\..\dxLinearGauge\5 Indicator Types\RangeBar\RangeBar.md,..\..\..\..\dxCircularGauge\5 Indicator Types\TextCloud\TextCloud.md,..\..\..\..\dxLinearGauge\5 Indicator Types\TextCloud\TextCloud.md<!--/propertyOf-->
<!--default-->undefined<!--/default-->
<!--type-->function(indicatedValue)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed in an indicator.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a callback function for this option, use the value displayed in the indicator. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.
<!--/fullDescription-->
<!--typeFunctionParamName1-->indicatedValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the indicated value.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The raw value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The formatted value converted to a string.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the indicator to display.
<!--/typeFunctionReturnDescription-->