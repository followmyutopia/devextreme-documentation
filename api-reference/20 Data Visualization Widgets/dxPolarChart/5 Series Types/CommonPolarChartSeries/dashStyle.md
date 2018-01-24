===========================================================================
<!--propertyOf-->..\LineSeries\LineSeries.md<!--/propertyOf-->
<!--default-->'solid'<!--/default-->
<!--acceptValues-->'dash' | 'dot' | 'longDash' | 'solid'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the dash style of the series' line.
<!--/shortDescription-->

<!--fullDescription-->
The following values are available.

* **solid**   
Displays a solid, continuous line.
* **longDash**    
Displays the series using long dashes.
* **dash**   
Displays the series using dashes.
* **dot**   
Displays the series using dots.
* **any combination of 'longDash', 'dash' and 'dot'**   
Displays the series by repeating the specified combination. For instance, 'dashdotdash'.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.
<!--/fullDescription-->