===========================================================================
<!--default-->'ellipsis'<!--/default-->
<!--acceptValues-->'ellipsis' | 'hide' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to arrange labels when there is insufficient space to display them all.
<!--/shortDescription-->

<!--fullDescription-->
You can set this option to rearrange two overlapping labels. It accepts the following values: 

- *"ellipsis"*   
Adds ellipsis to one label to leave more space for the other.

- *"hide"*  
Hides one label.

- *"none"*  
Leaves labels overlapped.

Use the `SankeyLabelOverlappingBehavior` enum to specify this option when the widget is used as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/). This enum accepts the following values: `Ellipsis`, `Hide`, and `None`.
<!--/fullDescription-->
