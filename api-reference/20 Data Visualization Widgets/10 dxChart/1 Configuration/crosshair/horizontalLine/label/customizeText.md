<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Label custom format function<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(info)<!--/type-->
<!--fp1d-->Defines an argument value.<!--/fp1d-->
<!--fp1_field1d-->Specifies the axis argument that is currently represented.<!--/fp1_field1d-->
<!--fp1_field2d-->Specifies the value of the currently represented argument with applied formatting if the format and precision (optional) properties are specified.<!--/fp1_field2d-->
<!--fp1_field3d-->Crosshair's target point<!--/fp1_field3d-->
<!--frd-->The text to be displayed in crosshair's label.<!--/frd-->
===========================================================================

<!--shortDescription-->
Customizes the text displayed by the label that belongs to the horizontal crosshair line.
<!--/shortDescription-->

<!--fullDescription-->
[note]The parameter of the **customizeText** function is mirrored by the **this** object.
<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the point a user paused on.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date|Number|string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The value of the point.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The value with an applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/label/#format">format</a> and converted to string.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->point<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Point<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The <b>Point</b> object.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed in the label that belongs to the horizontal crosshair line.
<!--/typeFunctionReturnDescription-->