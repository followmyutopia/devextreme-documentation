<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Tile settings<!--/d-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures tiles.
<!--/shortDescription-->

<!--fullDescription-->
A tile is a rectangle representing a node that has no children in the current context. Several tiles can be collected into a [group](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/) if the [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource) implies a hierarchical structure.

The following list provides an overview of tiles' features that you can configure using the **tile** object.

* **Labels**      
Each tile is identified by a label. Its appearance can be changed using the fields of the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/label/) object. If the tile's area is too small, the label will be hidden.
* **Color**     
There are several approaches to colorizing the tiles. Refer to the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/#color) option description to find information about all of them.
* **Hover and Selection Styles**        
A tile can be in the [hover](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#hoverEnabled) or [selected](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#selectionMode) state. In these states, its style changes to the one specified by the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/selectionStyle/) object respectively. Along with the tile, its parent group can enter the hover or selected state. To enable this feature, assign *true* to the [interactWithGroup](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#interactWithGroup) option of the root configuration object.
* **Border's Appearance**     
Specify the fields of the [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/border/) object to configure the tile borders.

An object assigned to the **tile** field configures all tiles in the widget. To customize a specific tile, pass a similar object to the [customize(options)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#customizeoptions) method of the node represented by the tile.
<!--/fullDescription-->