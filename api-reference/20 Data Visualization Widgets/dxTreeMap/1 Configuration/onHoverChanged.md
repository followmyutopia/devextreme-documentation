<!--EventForAction-->..\4 Events\hoverChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **hoverChanged** event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the node whose hover state has been changed.

To identify whether the node was hovered over or hovered out, call its [isHovered()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isHovered) method. To identify whether the node is a single tile or a group of tiles, call its [isLeaf()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isLeaf) method. Other accessible fields and methods of a node are described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.
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
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->node<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxTreeMapNode<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The node whose hover state has been changed; described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.
<!--/typeFunctionParamDescription1_field4-->
