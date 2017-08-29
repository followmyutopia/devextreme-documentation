<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->'tag'<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies which data source field provides auxiliary data for series points.
<!--/shortDescription-->

<!--fullDescription-->
This option allows you to associate virtually any required data with a series point. This data will be stored in the [tag](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Fields/#tag) field of the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/) object.

Commonly, a chart contains several series, and many of them have the same **tagField** value. In this case, specify the **tagField** property in the **commonSeriesSettings** object. If a series must have a unique **tagField** value, specify the same property, but do so in the series object within the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array.

#####See Also#####
- **series**.[tag](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#tag) - associates data with an entire series.
<!--/fullDescription-->