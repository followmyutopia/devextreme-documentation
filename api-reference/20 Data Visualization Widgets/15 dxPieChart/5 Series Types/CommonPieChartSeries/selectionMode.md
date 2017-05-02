<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'onlyPoint'<!--/default-->
<!--acceptValues-->'onlyPoint' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
<p>Specifies the chart elements to highlight when the series is selected.</p>
<!--/shortDescription-->

<!--fullDescription-->
<p>The **PieChart** widget comes with an API that allows you to select a series or a particular point in code. Use the <b>selectionMode</b> property to specify which series elements to select when the series is selected.</p>

<ul>
<li><b>onlyPoint</b><br/>
Changes the appearance of the selected point only.
</li>
<li><b>none</b><br/>
The appearance of the selected series is not changed.
</li>
</ul>

<p>To set custom options for the 'selected' style (which is applied when a series is selected), use the <b>selectionStyle</b> configuration object.</p>

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `PieChartSeriesInteractionMode` enum. This enum accepts the following values: `OnlyPoint` and `None`.
<!--/fullDescription-->