<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\nodesRendering.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [nodesRendering](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#nodesRendering) event.
<!--/shortDescription-->

<!--fullDescription-->
Use this handler to customize nodes before they will be displayed. This handler will be called each time the collection of [active](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isActive) nodes is changed.

Within the handler, you can use the object passed to it as the parameter. Among the fields of this object, you can find the currently displayed node. Using the [getAllNodes()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllNodes), [getAllChildren()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllChildren), [getChild(index)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getChildindex) and [getParent()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getParent) of this node, you can access any other node in the widget. To learn about other available members of any node, refer to the description of the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.
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
<!--typeFunctionParamName1_field4-->node<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxTreeMapNode<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
In most cases, the root node. When drilling down, the node of the highest displayed level.
<!--/typeFunctionParamDescription1_field4-->
