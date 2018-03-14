<!--EventForAction-->..\4 Events\nodesInitialized.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **nodesInitialized** event. Executed after the loaded nodes are initialized.
<!--/shortDescription-->

<!--fullDescription-->
Use this handler to modify the [node fields](/Documentation/ApiReference/UI_Widgets/dxTreeList/Node/). You can traverse the tree using the [forEachNode(callback)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#forEachNodecallback) method or implement your custom algorithm. Within this algorithm, start traversing from the root node, which is available via the handler parameter's **root** field.  Every node, including the root one, provides access to its child nodes in the **children** field, which allows traversing the whole tree.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
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
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
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
