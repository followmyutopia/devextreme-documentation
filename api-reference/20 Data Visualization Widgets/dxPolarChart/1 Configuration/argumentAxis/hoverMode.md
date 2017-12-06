===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'allArgumentPoints'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the elements that will be highlighted when the argument axis is hovered over.
<!--/shortDescription-->

<!--fullDescription-->
The following values are accepted:

* **none**    
Nothing happens when the argument axis is hovered over.
* **allArgumentPoints**    
The points that correspond to the argument that is currently hovered over are highlighted. To change the way the points are highlighted, set the options within the **series**.**point**.[hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/hoverStyle/) object.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ArgumentAxisHoverMode` enum. This enum accepts the following values: `AllArgumentPoints` and `None`.
<!--/fullDescription-->