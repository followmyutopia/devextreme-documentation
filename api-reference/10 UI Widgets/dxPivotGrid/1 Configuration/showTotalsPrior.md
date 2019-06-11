<!--id-->dxPivotGrid.Options.showTotalsPrior<!--/id-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'both' | 'columns' | 'none' | 'rows'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies where to show the total rows or columns. Applies only if [rowHeaderLayout](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#rowHeaderLayout) is *"standard"*.
<!--/shortDescription-->

<!--fullDescription-->
By default, total rows and columns are shown after data (columns at the right side, rows at the bottom). You can place total rows, total columns or both before data using this option.

#include common-ref-enum with {
    enum: "`PivotGridTotalsDisplayMode`",
    values: "`Rows`, `Columns`, `Both`, and `None`"
}
<!--/fullDescription-->