<!--id-->dxChart.Options.commonSeriesSettings<!--/id-->
===========================================================================
<!--hideDefaults-->true<!--/hideDefaults-->
<!--type-->Object<!--/type-->
<!--inherits-->..\..\5 Series Types\CommonSeries\CommonSeries.md<!--/inherits-->
<!--inheritAll--><!--/inheritAll-->
===========================================================================

<!--shortDescription-->
Specifies settings common for all series in the chart.
<!--/shortDescription-->

<!--fullDescription-->
There are three ways to configure a series.

- The **commonSeriesSettings** object     
Specifies settings for all series in a chart.

- The **commonSeriesSettings**.**%seriesType%** (**[area](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#area)**, **[line](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line)**, etc.) object        
Specifies settings for all series of the **seriesType**.

- An object in the **[series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/)** array        
Specifies settings for an individual series.

[note]You can use these objects together, but note that individual settings override type-specific settings, which in their turn, override common settings.
<!--/fullDescription-->