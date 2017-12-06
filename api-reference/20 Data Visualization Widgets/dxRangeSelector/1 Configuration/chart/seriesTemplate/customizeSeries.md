===========================================================================
<!--type-->function(seriesName)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns a [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/?#series) object with individual series settings.
<!--/shortDescription-->

<!--fullDescription-->
Use this option to specify individual settings for a particular series.

To determine the series to be customized, use the function's parameter. The parameter is the series name that is specified in the **series** array.
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