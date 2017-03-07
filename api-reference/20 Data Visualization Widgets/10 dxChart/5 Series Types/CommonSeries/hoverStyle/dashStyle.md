<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--propertyOf-->..\..\LineSeries\LineSeries.md,..\..\StackedLineSeries\StackedLineSeries.md,..\..\FullStackedLineSeries\FullStackedLineSeries.md,..\..\StackedSplineSeries\StackedSplineSeries.md,..\..\FullStackedSplineSeries\FullStackedSplineSeries.md,..\..\SplineSeries\SplineSeries.md,..\..\StepLineSeries\StepLineSeries.md<!--/propertyOf-->
<!--default-->'solid'<!--/default-->
<!--acceptValues-->'solid' | 'longDash' | 'dash' | 'dot'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the dash style of the series line when the series is in the hovered state. Applies only to line-like series.
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

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `DashStyle` enum. This enum accepts the following values: `Solid`, `LongDash`, `Dash` and `Dot`.
<!--/fullDescription-->