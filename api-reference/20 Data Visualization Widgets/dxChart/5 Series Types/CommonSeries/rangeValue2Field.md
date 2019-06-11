<!--id-->dxChartSeriesTypes.CommonSeries.rangeValue2Field<!--/id-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--propertyOf-->..\RangeBarSeries\RangeBarSeries.md,..\RangeAreaSeries\RangeAreaSeries.md<!--/propertyOf-->
<!--default-->'val2'<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Coupled with the **rangeValue1Field** option, specifies which data source field provides values for a range-like series.
<!--/shortDescription-->

<!--fullDescription-->
Each point in a range-like series has one argument and two values. Arguments are provided by the **argumentField**; values are provided by the **rangeValue1Field**, **rangeValue2Field**.

If you use a [series template](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/), specify the value field properties in the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object. Otherwise, do this in the series object within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array.
<!--/fullDescription-->