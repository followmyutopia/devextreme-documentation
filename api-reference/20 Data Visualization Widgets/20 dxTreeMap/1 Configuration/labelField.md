<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Path to field with text for labels in a dataSource<!--/d-->
===========================================================================
<!--default-->'name'<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the name of the [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource) field that provides texts for tile and group labels.
<!--/shortDescription-->

<!--fullDescription-->
Each tile or group of tiles is accompanied by a text label. Usually, a label displays the name of the tile or the group. However, you can put any desired text into it. For this purpose, call the [label(label)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#labellabel) method of the node whose label must be changed. You can call this method, for example, when all nodes are [initialized](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesInitialized) or when they are [being rendered](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesRendering).

If you need to change the appearance of all labels, use the **tile** | [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/label/) and **group** | [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/label/) objects. To change the appearance of a particular label, use the [customize(options)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#customizeoptions) function of the node to which the label belongs.

#####See Also#####
- [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource) - specifies the origin of data for the widget.
- [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#valueField) - specifies the data source field that provides values for tiles.
- [childrenField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#childrenField) - specifies the data source field that provides nested items for a group.
<!--/fullDescription-->