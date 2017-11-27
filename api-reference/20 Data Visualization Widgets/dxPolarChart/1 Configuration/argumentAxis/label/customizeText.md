<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(argument)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed by argument axis labels.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a callback function for this configuration option, use the argument value to be displayed in a label. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

For general information on data formatting, refer to the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->argument<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Defines an argument value.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date|Number|string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Specifies the axis argument that is currently represented.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Specifies the value of the currently represented argument with applied [formatting](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/label/#format).
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed by argument axis labels.
<!--/typeFunctionReturnDescription-->