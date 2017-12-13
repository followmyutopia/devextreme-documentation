===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when the **Series** and **Point** chart elements are ready to be accessed.
<!--/shortDescription-->

<!--fullDescription-->
To access the required series, use the **getAllSeries()**, **getSeriesByName(seriesName)** or **getSeriesByPos(seriesIndex()** method of the chart instance. The accessed series object allows you to access the required point and then access the point's label. The API of the Series, Point and Label objects is detailed in the **Chart Elements** Reference section.

To perform custom actions when the chart is drawn, handle the **drawn** event of the chart.

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
