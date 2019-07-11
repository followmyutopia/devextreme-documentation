<!--id-->GridBase.Options.onRowRemoved<!--/id-->
<!--EventForAction-->GridBase.rowRemoved<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after a row has been removed from the data source.
<!--/shortDescription-->

<!--fullDescription-->
[note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), if several rows have been removed, this function will be executed for each row individually.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
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
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data of the row.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->key<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->error<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Error<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object defining an error that may occur during removal.
<!--/typeFunctionParamDescription1_field6-->
