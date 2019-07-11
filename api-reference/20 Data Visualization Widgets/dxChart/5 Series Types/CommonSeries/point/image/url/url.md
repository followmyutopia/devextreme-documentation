<!--id-->dxChartSeriesTypes.CommonSeries.point.image.url<!--/id-->
===========================================================================
<!--propertyOf-->dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries<!--/propertyOf-->
<!--default-->undefined<!--/default-->
<!--type-->String | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the URL of the image to be used as a point marker.
<!--/shortDescription-->

<!--fullDescription-->
Normally, this option accepts one URL as a string value, but if you have a *range area* series, you may want to specify different images for the minimum and maximum points. In that instance, set the **url** option to an object with the **rangeMinPoint** and **rangeMaxPoint** fields.
<!--/fullDescription-->