===========================================================================
<!--type-->function(seriesInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the series that corresponds to the legend item.
<!--/fullDescription-->
<!--typeFunctionParamName1-->seriesInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the series.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->seriesName<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->any<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The series' [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name). To get the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/) object by this name, call the [getSeriesByName(seriesName)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByNameseriesName) method.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->seriesIndex<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The index of the series in the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array. To get the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/) object by this index, call the [getSeriesByPos(seriesIndex)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByPosseriesIndex) method.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->seriesColor<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->String<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#color).
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the hint to display.
<!--/typeFunctionReturnDescription-->