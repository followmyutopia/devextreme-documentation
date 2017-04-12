<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(info)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes the text displayed by the crosshair labels.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a function that will be called twice on each point - once for the horizontal line, and then for the vertical. To specify an individual function, which will be called for the horizontal or vertical line separately, use the **customizeText** option within [horizontalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/) | **label** or [verticalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/) | **label** object. 

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
The argument or the value of the point.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The argument or the value with an applied <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/label/#format">format</a> and converted to string.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->point<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Point<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The <b>Point</b> object.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed in the crosshair labels.
<!--/typeFunctionReturnDescription-->