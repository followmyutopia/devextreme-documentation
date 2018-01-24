===========================================================================
<!--default-->'solid'<!--/default-->
<!--acceptValues-->'dash' | 'dot' | 'longDash' | 'solid'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the dash style of the pane border.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following values.

* **solid**   
Displays a solid, continuous border.
* **dash**   
Displays the border using short dashes.
* **longDash**   
Displays the border using long dashes.
* **dot**    
Displays the border using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays the border by repeating the specified combination. For example, *'dashdotdash'*.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.
<!--/fullDescription-->