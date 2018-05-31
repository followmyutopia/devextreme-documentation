===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how many hierarchical levels must be visualized.
<!--/shortDescription-->

<!--fullDescription-->
If you have a structure with deep nesting level, displaying all levels at once produces visual clutter. To reduce it, specify the number of levels that can be visualized at a time using the **maxDepth** property.

![DevExpress DevExtreme HTML5 TreeMap](/Content/images/doc/18_2/ChartJS/TreeMap_maxDepth.png)

When you set this option, data that occupies the lowest levels may become unavailable to the user. For such cases, implement the [drill down feature](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown).
<!--/fullDescription-->