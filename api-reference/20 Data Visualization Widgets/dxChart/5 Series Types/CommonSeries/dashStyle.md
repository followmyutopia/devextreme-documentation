===========================================================================
<!--propertyOf-->..\LineSeries\LineSeries.md,..\StackedLineSeries\StackedLineSeries.md,..\FullStackedLineSeries\FullStackedLineSeries.md,..\StackedSplineSeries\StackedSplineSeries.md,..\FullStackedSplineSeries\FullStackedSplineSeries.md,..\SplineSeries\SplineSeries.md,..\StepLineSeries\StepLineSeries.md<!--/propertyOf-->
<!--default-->'solid'<!--/default-->
<!--acceptValues-->'solid' | 'longDash' | 'dash' | 'dot'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the dash style of the series line. Applies only to line-like series.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following values.

* **solid**   
Displays a solid, continuous series line.
* **dash**   
Displays the series line using short dashes.
* **longDash**   
Displays the series line using long dashes.
* **dot**    
Displays the series line using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays the series line by repeating the specified combination. For example, *'dashdotdash'*.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.
<!--/fullDescription-->