<!--id-->dxChart.Options.dataPrepareSettings.sortingMethod<!--/id-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean | function(a, b)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the sorting order in which series points should be drawn.
<!--/shortDescription-->

<!--fullDescription-->
When this option is set to **true**, the series points are drawn in order of increasing argument. Otherwise, the order of drawing the series points is the same as the order of objects in the data source.

[note]We recommend setting this option to **false** if objects in the data source are already sorted properly. This will improve widget performance.

Alternatively, you can specify the drawing order using a comparison function. It accepts two data source objects and should return the value on which the order will depend. For example, assume that *A* and *B* objects represent two series points. If the function returns a value less than 0, point *A* will be drawn _before_ point *B*. If the function returns a value greater than 0, point *A* will be drawn _after_ point *B*. If the function returns 0, the drawing order of *A* and *B* remains unchanged.

[note]When the [argumentType](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType) is *'string'*, the **sortingMethod** option does not accept Boolean values. However, you can still apply sorting using a comparison function. Alternatively, use the [categories](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories) array to perform the same task. Note that the **categories** array takes precedence over the **sortingMethod** function.
<!--/fullDescription-->
<!--typeFunctionParamName1-->a<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource) object to be compared.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->b<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
A [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource) object to be compared.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->Number<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Specifies whether *a* goes before *b*.
<!--/typeFunctionReturnDescription-->