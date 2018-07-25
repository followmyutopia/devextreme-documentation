<!--EventForAction-->..\4 Events\selectionChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when a node is selected or the selection is canceled.
<!--/shortDescription-->

<!--fullDescription-->
To identify whether the selection has been applied or canceled, call the node's [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isSelected) method. To identify whether the clicked node is a single tile or a group of tiles, use the node's [isLeaf()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isLeaf) method.
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
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->node<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxTreeMapNode<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The node whose selection state has been changed; described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.
<!--/typeFunctionParamDescription1_field4-->
