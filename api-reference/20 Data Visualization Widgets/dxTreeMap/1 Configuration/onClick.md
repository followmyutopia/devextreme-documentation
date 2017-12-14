<!--EventForAction-->..\4 Events\click.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [click](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#click) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the clicked node. For example, the following function uses the node's [select(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#selectstate) and [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isSelected) methods to select/deselect the node on a click.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onClick: function (e) {
            e.node.select(!e.node.isSelected());
        }
    };

To identify whether the clicked node is a tile or a group of tiles, use the [isLeaf()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isLeaf) method. To learn about other available members of a node, refer to the description of the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.

Alternatively, you can navigate to a specific URL when the **click** event fires. For this purpose, assign this URL to the **onClick** option.
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
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->event<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->node<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->dxTreeMapNode<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The clicked node; described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.
<!--/typeFunctionParamDescription1_field6-->
