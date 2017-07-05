<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Indicates whether the current node is active.
<!--/shortDescription-->

<!--returnType-->boolean<!--/returnType-->
<!--returnDescription-->
**true** if the node belongs to the currently displayed collection of nodes; **false** otherwise.
<!--/returnDescription-->

<!--fullDescription-->
[note]In most cases, you can consider that the **isActive()** method returns **true** when the node is visible, and **false** otherwise. However, there is an exception for the nodes with zero value. Such nodes are invisible, yet their **isActive()** method returns **true**.
<!--/fullDescription-->