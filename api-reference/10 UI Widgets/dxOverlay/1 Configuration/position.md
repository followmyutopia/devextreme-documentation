===========================================================================
<!--default-->{ my: 'center', at: 'center', of: window }<!--/default-->
<!--acceptValues-->'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top'<!--/acceptValues-->
<!--type-->String | positionConfig | function()<!--/type-->
===========================================================================

<!--shortDescription-->
Positions the widget.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following:

- **[Position configuration object](/Documentation/ApiReference/Common/Object_Structures/positionConfig/)**    
An object that specifies the position in every detail.

- **String**        
A shortcut listed in the accepted values. Positions the widget relative to the window.

- **Function**      
A function that returns one of the above. Use it to position the widget differently depending on a condition.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option using the `PositionAlignment` enum. This enum accepts the following values: `Bottom`, `Center`, `Left`, `LeftBottom`, `LeftTop`, `RightBottom`, `RightTop`, and `Top`.
<!--/fullDescription-->
