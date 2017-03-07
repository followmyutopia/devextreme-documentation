<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Customizes node appearance (color, border, hoverStyle, selectionStyle, label)
<!--/d-->
<!--p1d-->Node appearance options<!--/p1d-->
===================================================================
===================================================================

<!--shortDescription-->
Customizes the node.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
A <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#tile">tile</a> or a <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#group">group</a>.
<!--/paramDescription1-->

<!--fullDescription-->
Use this method to customize a specific node. Depending on whether the node is a tile or a group, this method accepts either a [tile](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/) object or a [group](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/) object.

[note]You can specify any fields of the **tile** or **group** objects, except the [headerHeight](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/headerHeight/) field. This restriction exists because the layout of tiles and groups is calculated long before any customization can be applied.

You can call the **customize(options)** method at any point of the application flow, for example, when the nodes are [being rendered](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesRendering). The following code paints the label of a child node in blue or red depending on the node's value.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onNodesRendering: function (e) {
            var children = e.node.getAllChildren();
            $.each(children, function(_, node) {
                node.customize({
                    label: {
                        font: {
                            color: node.value() > 100 ? 'blue' : 'red'
                        }
                    }
                })
            })
        }
    };
    
[note]When a node is being drilled down/up, its visual representation is converted from tile to group and back. However, the customizations made in that node by the **customize(options)** method remain. If you need to revert the appearance of the node to the initial state, call the node's [resetCustomization()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#resetCustomization) method.
<!--/fullDescription-->