<!--id-->dxPolarChart.Options.onSeriesClick<!--/id-->
<!--EventForAction-->dxPolarChart.seriesClick<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a [series](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series) is clicked or tapped.
<!--/shortDescription-->

<!--fullDescription-->
[note] This function is also executed when a [series point](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points) or [legend item](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Legend) is clicked or tapped. You can cancel the execution in the [onPointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onPointClick) and [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onLegendClick) functions.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->event<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
#include common-ref-eventparam
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->target<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->polarChartSeriesObject<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The clicked series; described in the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/) section.
<!--/typeFunctionParamDescription1_field6-->
