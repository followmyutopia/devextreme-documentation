<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Returns visible series points.
<!--/shortDescription-->

<!--returnType-->Array<!--/returnType-->
<!--returnDescription-->
Visible points.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to get points that lay within the visible range defined by the [min](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#min) and [max](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#max) options of an axis. This method is also useful if you need to obtain the points displayed when [data aggregation](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#useAggregation) is applied.

[note] If a chart series or its points are not displayed as hidden from code, the **getVisiblePoints()** method called for this series still returns points that lay within the visible range as if these points were visible.
<!--/fullDescription-->