<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\click.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function | string<!--/type-->
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
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->jQueryEvent<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->jQuery-event object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The jQuery event.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->node<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxtreemapnode<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The clicked node.
<!--/typeFunctionParamDescription1_field4-->
