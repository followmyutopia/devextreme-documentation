===========================================================================
<!--default-->'standard'<!--/default-->
<!--acceptValues-->'standard' | 'virtual'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the rendering mode for columns. Applies when columns are left outside the viewport.
<!--/shortDescription-->

<!--fullDescription-->
The following rendering modes are available in the widget: 

- *"standard"*        
Renders all columns at once.

- *"virtual"*     
Renders only those columns that get into the viewport.          
This mode is ignored if [banded columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Band_Columns/) are present in the widget.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `GridColumnRenderingMode` enum. This enum accepts the following values: `Standard` and `Virtual`.
<!--/fullDescription-->
