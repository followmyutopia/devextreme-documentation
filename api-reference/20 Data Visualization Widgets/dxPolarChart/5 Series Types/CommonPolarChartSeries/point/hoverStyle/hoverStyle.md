<!--id-->dxPolarChartSeriesTypes.CommonPolarChartSeries.point.hoverStyle<!--/id-->
===========================================================================
<!--propertyOf-->dxPolarChartSeriesTypes.linepolarseries,dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.scatterpolarseries<!--/propertyOf-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
An object defining configuration options for a hovered point.
<!--/shortDescription-->

<!--fullDescription-->
To set a custom 'hover' style for points in all series at once, use the **point**.**hoverStyle** object within the **commonSeriesSettings** configuration object.

If you have several series of one type, you can set point hover style options to the values specific to this series type using the corresponding object (**area**, **line** or another) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

In case you have to set a point hover style option for an individual series, use the **hoverStyle** object within the **series**.**point** object of the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) array. The values that are set individually override corresponding common values.
<!--/fullDescription-->