<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Function that allows user to specifi additional options for series created from template<!--/d-->
===========================================================================
<!--type-->function(seriesName)<!--/type-->
<!--fp1d-->The name of the series to be customized<!--/fp1d-->
<!--frd-->A configuration object for the series.<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns a [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) object with individual series settings.
<!--/shortDescription-->

<!--fullDescription-->
Use this option to specify individual settings for a particular series.

To determine the series to which the function's return value will be applied, use the function's parameter. The parameter is set to the series name that is specified in the data source's field.
<!--/fullDescription-->
<!--typeFunctionParamName1-->seriesName<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->string<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The name of the series to be customized.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Series configuration<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A configuration object for the series.
<!--/typeFunctionReturnDescription-->