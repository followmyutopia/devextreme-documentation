<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--propertyOf-->..\..\LineSeries\LineSeries.md,..\..\AreaSeries\AreaSeries.md,..\..\ScatterSeries\ScatterSeries.md<!--/propertyOf-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
An object defining configuration options for [points](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points) in line and area series.
<!--/shortDescription-->

<!--fullDescription-->
To specify point options for all line and area series at once, use the properties of the **point** object defined within the **commonSeriesSettings** configuration object.

If you have several series of a single type, you can set point options to the values specific to this series type using the corresponding object (**area**, **line** etc.) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override their corresponding common values.

If you need to set a point option for an individual series, use the **point** object within the series object of the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) array. The values that are set individually override their corresponding common values.
<!--/fullDescription-->