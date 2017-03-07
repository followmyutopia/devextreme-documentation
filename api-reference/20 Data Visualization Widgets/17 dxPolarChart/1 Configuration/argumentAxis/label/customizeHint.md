<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Label hint custom format function<!--/d-->
===========================================================================
<!--type-->function(argument)<!--/type-->
<!--fp1d-->Defines an argument value.<!--/fp1d-->
<!--fp1_field1d-->Specifies the axis argument that is currently represented.<!--/fp1_field1d-->
<!--fp1_field2d-->Specifies the value of the currently represented argument with applied formatting if the format and precision (optional) properties are specified.<!--/fp1_field2d-->
<!--frd-->The text to be displayed by argument axis labels.<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies the text for a hint that appears when a user hovers the mouse pointer over a label on the argument axis.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the value displayed by the axis label.
<!--/fullDescription-->
<!--typeFunctionParamName1-->argument<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object providing access to the value displayed by the axis label.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date|Number|string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The value as it is specified in the data source.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The value with applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/label/#format">formatting</a>.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed in the hint.
<!--/typeFunctionReturnDescription-->