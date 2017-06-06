<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the series that corresponds to the legend item.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->seriesName<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#name">name</a> of the series. To get the <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/">Series</a> object by this name, call the <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#getSeriesByNameseriesName">getSeriesByName(seriesName)</a> method.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->seriesIndex<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The index of the series in the <b>series</b>. To get the <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/">Series</a> object by this index, call the <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#getSeriesByPosseriesIndex">getSeriesByPos(seriesIndex)</a> method.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->seriesColor<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->string<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#color">color</a> of the series.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed in the hint.
<!--/typeFunctionReturnDescription-->