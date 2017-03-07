<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--propertyOf-->..\..\..\..\LineSeries\LineSeries.md,..\..\..\..\AreaSeries\AreaSeries.md,..\..\..\..\ScatterSeries\ScatterSeries.md<!--/propertyOf-->
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
An object defining the border options for a selected point.
<!--/shortDescription-->

<!--fullDescription-->
To set custom border settings specific to the 'selected' state for points in all series at once, use the properties of the **commonSeriesSettings** | **point** | **selectionStyle** | **border** configuration object.

To set custom border settings specific to the 'selected' state for points in all series of a single type at once, use the properties of the corresponding object within **commonSeriesSettings** (e.g. **area** | **selectionStyle** | **border**). The values that are set within this object override the corresponding common values that are set within the root **commonSeriesSettings** | **selectionStyle** | **border** object.

In case you have to set a selection style option for a point border in an individual series, use the **selectionStyle** | **border** object within the series object of the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) array. The values that are set individually override corresponding common values.
<!--/fullDescription-->