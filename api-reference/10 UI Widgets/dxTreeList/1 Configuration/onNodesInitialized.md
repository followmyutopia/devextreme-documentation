<!--id-->dxTreeList.Options.onNodesInitialized<!--/id-->
<!--EventForAction-->..\4 Events\nodesInitialized.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after the loaded nodes are initialized.
<!--/shortDescription-->

<!--fullDescription-->
Use this function to modify the [node fields](/Documentation/ApiReference/UI_Widgets/dxTreeList/Node/). You can traverse the tree using the [forEachNode(callback)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#forEachNodecallback) method or implement your custom algorithm. Within this algorithm, start traversing from the root node, which is available via the function parameter's **root** field.  Every node, including the root one, provides access to its child nodes in the **children** field, which allows traversing the whole tree.
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
<!--typeFunctionParamName1_field4-->root<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxTreeListNode<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The root node.
<!--/typeFunctionParamDescription1_field4-->
