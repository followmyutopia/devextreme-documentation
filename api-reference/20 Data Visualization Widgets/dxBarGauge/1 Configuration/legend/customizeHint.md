===========================================================================
<!--type-->function(arg)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the hint that appears when a user hovers the mouse pointer over a legend item.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the bar that corresponds to the legend item.
<!--/fullDescription-->
<!--typeFunctionParamName1-->arg<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the bar and its corresponding legend item.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->item<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->BarGaugeBarInfo<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Information on the bar.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->text<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The legend item's text.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed in the hint.
<!--/typeFunctionReturnDescription-->