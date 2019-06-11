<!--id-->dxPolarChartSeriesTypes.CommonPolarChartSeries.hoverStyle<!--/id-->
===========================================================================
<!--propertyOf-->..\..\AreaSeries\AreaSeries.md,..\..\BarSeries\BarSeries.md,..\..\StackedBarSeries\StackedBarSeries.md,..\..\LineSeries\LineSeries.md<!--/propertyOf-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
An object defining configuration options for a hovered series.
<!--/shortDescription-->

<!--fullDescription-->
To set a custom 'hover' style for all series at once, use the **hoverStyle** object within the **commonSeriesSettings** configuration object.

If you have several series of one type, you can set hover style options to the values specific to this type using the corresponding object (**area**, **line** or another) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

In case you have to set a hover style option for an individual series, use the **hoverStyle** object within the series object of the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) array. The values that are set individually override corresponding common values.
<!--/fullDescription-->