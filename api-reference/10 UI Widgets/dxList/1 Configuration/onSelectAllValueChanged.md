<!--EventForAction-->..\4 Events\selectAllValueChanged.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [selectAllValueChanged](/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectAllValueChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action when the select all check box value is changed.

Note that this event fires only if the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode) option is set to *'all'*.

#####See Also#####
- [List - Handle Selection-Related Events](/Documentation/Guide/Widgets/List/Selection/#Events)
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
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->value<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->boolean<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The "Select All" check box's state.
<!--/typeFunctionParamDescription1_field4-->
