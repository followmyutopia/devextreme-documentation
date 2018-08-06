===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'source' | 'target' | 'gradient'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to color links.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values:

- *"none"*      
The color specified in the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/#color) option is used.

- *"source"*        
A source node's color is used.

- *"target*"        
A target node's color is used.

- *"gradient"*      
A gradient color between the source node's and target node's color is used.

Use the `SankeyColorMode` enum to specify this option when the widget is used as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/). This enum accepts the following values: `None`, `Source`, `Target`, and `Gradient`.
<!--/fullDescription-->