<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(axisValue)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed in value axis labels.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a callback function for this configuration option, use the value to be displayed in a label. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

For general information on data formatting, refer to the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->axisValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Defines an axis value.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date|Number|string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Specifies the axis value that is currently represented.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Specifies the currently represented axis value with applied <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/label/#format">formatting</a>.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed by a value axis label.
<!--/typeFunctionReturnDescription-->