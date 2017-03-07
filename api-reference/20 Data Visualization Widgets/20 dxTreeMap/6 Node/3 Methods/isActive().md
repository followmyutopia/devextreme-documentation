<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Shows weather node is visually present (considering current max depth and drilldown)
<!--/d-->
<!--rd-->State<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Indicates whether the current node is active.
<!--/shortDescription-->

<!--returnType-->boolean<!--/returnType-->
<!--returnDescription-->
<i>true</i> if the node belongs to the currently displayed collection of nodes; <i>false</i> otherwise.
<!--/returnDescription-->

<!--fullDescription-->
[note]In most cases, you can consider that the **isActive()** method returns *true* when the node is visible, and *false* otherwise. However, there is an exception for the nodes with zero value. Such nodes are invisible, yet their **isActive()** method returns *true*.
<!--/fullDescription-->