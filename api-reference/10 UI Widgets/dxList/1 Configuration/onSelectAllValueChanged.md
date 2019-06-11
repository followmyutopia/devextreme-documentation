<!--id-->dxList.Options.onSelectAllValueChanged<!--/id-->
<!--EventForAction-->..\4 Events\selectAllValueChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when the "Select All" check box value is changed. Applies only if the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode) is *"all"*.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode)
- [List - Handle Selection-Related Events](/Documentation/Guide/Widgets/List/Selection/#Events)
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
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->value<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Boolean<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The "Select All" check box's state.
<!--/typeFunctionParamDescription1_field4-->
