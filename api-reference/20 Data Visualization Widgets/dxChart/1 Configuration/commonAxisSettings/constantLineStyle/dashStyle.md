===========================================================================
<!--default-->'solid'<!--/default-->
<!--acceptValues-->'dash' | 'dot' | 'longDash' | 'solid'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the dash style of constant lines.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following values.

* **solid**   
Displays solid, continuous constant lines.
* **dash**   
Displays constant lines using short dashes.
* **longDash**   
Displays constant lines using long dashes.
* **dot**    
Displays constant lines using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays constant lines by repeating the specified combination. For example, *'dashdotdash'*.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.
<!--/fullDescription-->