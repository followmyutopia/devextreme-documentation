<!--id-->GridBaseColumn.sortOrder<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->undefined | 'asc' | 'desc'<!--/acceptValues-->
<!--type-->String<!--/type-->
<!--firedEvents-->optionChanged<!--/firedEvents-->
===========================================================================

<!--shortDescription-->
Specifies the sort order of column values.
<!--/shortDescription-->

<!--fullDescription-->
By default, rows are sorted according to the data source. Set the **sortOrder** option to sort rows in a required order. If you need to sort by multiple columns, specify the [sortIndex]({basewidgetpath}/Configuration/columns/#sortIndex) option as well, or otherwise, each sorted column will get a sort index according to the position in the **columns** array.

#include common-ref-enum with {
    enum: "`SortOrder`",
    values: "`Asc` and `Desc`"
}

#####See Also#####
- [sorting]({basewidgetpath}/Configuration/sorting/)
<!--/fullDescription-->