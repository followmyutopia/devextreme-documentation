<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->selection settings for point<!--/d-->
===========================================================================
<!--propertyOf-->..\..\..\LineSeries\LineSeries.md,..\..\..\AreaSeries\AreaSeries.md,..\..\..\ScatterSeries\ScatterSeries.md<!--/propertyOf-->
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
An object defining configuration options for a selected point.
<!--/shortDescription-->

<!--fullDescription-->
The **PolarChart** widget comes with API members that allow you to select a point in code. To set a custom 'selected' style for points in all series at once, use the **point** | **selectionStyle** object within the **commonSeriesSettings** configuration object.

If you have several series of one type, you can set point selection style options to the values specific to the series type using the corresponding object (**area**, **line** or another) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

In case you have to set a point selection style option for an individual series, use the **selectionStyle** object within the **series** | **point** object of the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPOlarChart/Configuration/series/) array. The values that are set individually override corresponding common values.
<!--/fullDescription-->