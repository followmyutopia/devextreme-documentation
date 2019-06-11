<!--id-->dxPieChartSeriesTypes.CommonPieChartSeries.selectionStyle.hatching.direction<!--/id-->
===========================================================================
<!--default-->'right'<!--/default-->
<!--acceptValues-->'left' | 'none' | 'right'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to apply hatching to highlight the selected point.
<!--/shortDescription-->

<!--fullDescription-->
The following values are available.

* **none**   
Do not apply hatching.
* **right**   
Apply an upward diagonal hatching style from left to right.
* **left**   
Apply a downward diagonal hatching style from left to right.

#include common-ref-enum with {
    enum: "`HatchingDirection`",
    values: "`Right`, `Left`, and `None`"
}
<!--/fullDescription-->