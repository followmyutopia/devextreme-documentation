<!--id-->dxPolarChartSeriesTypes.CommonPolarChartSeries.valueErrorBar<!--/id-->
===========================================================================
<!--propertyOf-->..\..\AreaSeries\AreaSeries.md,..\..\BarSeries\BarSeries.md,..\..\LineSeries\LineSeries.md,..\..\ScatterSeries\ScatterSeries.md<!--/propertyOf-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures error bars.
<!--/shortDescription-->

<!--fullDescription-->
Error bars are used on charts to indicate an error or an uncertainty in a reported measurement. They give a general idea of how precise a measurement is.

In **PolarChart**, an error bar is a vertical bar with two marks at its edges. An error bar accompanies a series point. Error bars can be generated either from concrete or calculated values. To generate one error bar, two values, high and low, are needed. If the [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#dataSource) of your chart provides concrete high and low values, assign the required data source fields to the **highValueField** and **lowValueField** options.

Alternatively, you can calculate the high and low error bar values automatically. For this purpose, choose one of [error bar types](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/valueErrorBar/#type) and specify the [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/valueErrorBar/#value) to be used in calculation.

[note]Error bars are available for axes of a numeric [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#type) only.
<!--/fullDescription-->