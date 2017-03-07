<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Shows weather node is leaf or not (considering current max depth and drilldown)
<!--/d-->
<!--rd-->State<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Indicates whether the node is visualized by a tile or a group of tiles.
<!--/shortDescription-->

<!--returnType-->boolean<!--/returnType-->
<!--returnDescription-->
If <i>true</i>, the node is a tile; if <i>false</i>, the node is a group of tiles.
<!--/returnDescription-->

<!--fullDescription-->
[note]When a node is being drilled down/up, its visual representation is converted from tile to group and back. Thus, the **isLeaf()** method may return different values for the same node at different stages of the application flow.
<!--/fullDescription-->