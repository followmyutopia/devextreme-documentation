<!--id-->dxFunnel.Options.onSelectionChanged<!--/id-->
<!--EventForAction-->..\4 Events\selectionChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a funnel item is selected or selection is canceled.
<!--/shortDescription-->

<!--fullDescription-->
To identify whether the selection has been applied or canceled, call the funnel item's [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isSelected) method.

See [onItemClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick) to learn how to implement selection.

#####See Also#####
- [selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#selectionMode)
- **item**.[selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/item/selectionStyle/)
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
<!--typeFunctionParamName1_field4-->item<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxFunnelItem<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The [Item](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/) object.
<!--/typeFunctionParamDescription1_field4-->
