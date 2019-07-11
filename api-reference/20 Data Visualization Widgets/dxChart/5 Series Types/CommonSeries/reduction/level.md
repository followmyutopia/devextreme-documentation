<!--id-->dxChartSeriesTypes.CommonSeries.reduction.level<!--/id-->
===========================================================================
<!--propertyOf-->dxChartSeriesTypes.CandleStickSeries,dxChartSeriesTypes.StockSeries<!--/propertyOf-->
<!--default-->'close'<!--/default-->
<!--acceptValues-->'close' | 'high' | 'low' | 'open'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether high, low, open or close prices of points should be compared.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-enum with {
    enum: "`FinancialChartReductionLevel`",
    values: "`Open`, `Close`, `High,` and `Low`"
}
<!--/fullDescription-->