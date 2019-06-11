<!--id-->dxPieChartSeriesTypes.CommonPieChartSeries.hoverMode<!--/id-->
===========================================================================
<!--default-->'onlyPoint'<!--/default-->
<!--acceptValues-->'none' | 'onlyPoint'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the chart elements to highlight when a series is hovered over.
<!--/shortDescription-->

<!--fullDescription-->
<p>The following values are available.</p>

<ul>
<li><b>onlyPoint</b><br/>
Changes the appearance of the hovered point only.
</li>
<li><b>none</b><br/>
The appearance of the hovered series is not changed.
</li>
</ul>

<p>To set custom options for the 'hover' style (which is applied when a series is hovered over), use the <b>hoverStyle</b> configuration object.</p>

#include common-ref-enum with {
    enum: "`PieChartSeriesInteractionMode`",
    values: "`OnlyPoint` and `None`"
}
<!--/fullDescription-->