<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Common label options<!--/d-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
An object defining the [label](/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Series_Point_Labels) configuration options.
<!--/shortDescription-->

<!--fullDescription-->
Each [series point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/) can be accompanied by a text label that represents data related to the point. These are called series point labels. Use the **label** object's properties to set label options for all chart series at once.

Specify the **label** object's properties within the **commonSeriesSettings** configuration object to set label options for all chart series at once.

If you have several series of a single type, you can set label options to the values specific to this series type using the corresponding object (**area**, **line**, etc.) within the **commonSeriesSettings** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

If you need to set a label option for an individual series, use the **label** object within the series object of the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) array. The values that are set individually override the corresponding common values.
<!--/fullDescription-->