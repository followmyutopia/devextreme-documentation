===========================================================================
<!--type-->function(seriesName)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns a [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) object with individual series settings.
<!--/shortDescription-->

<!--fullDescription-->
Use this option to specify individual settings for a particular series.

To determine the series to which the function's return value will be applied, use the function's parameter. The parameter is set to the series name that is specified in the data source's field.
<!--/fullDescription-->
<!--typeFunctionParamName1-->seriesName<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->any<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The name of the series to be customized.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->dxChartOptions_series<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The series' [configuration](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/).
<!--/typeFunctionReturnDescription-->