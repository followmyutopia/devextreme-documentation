===========================================================================
<!--default-->'solid'<!--/default-->
<!--acceptValues-->'dash' | 'dot' | 'longDash' | 'solid'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a dash style for a constant line.
<!--/shortDescription-->

<!--fullDescription-->
The following values are available.

* **solid**   
Displays a solid, continuous constant line.
* **longDash**   
Displays a constant line using long dashes.
* **dash**   
Displays a constant line using dashes.
* **dot**    
Displays a constant line using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays a constant line by repeating the specified combination. For instance, 'dashdotdash'.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.
<!--/fullDescription-->