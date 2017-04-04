<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->undefined | 'asc' | 'desc'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the sort order of column values.
<!--/shortDescription-->

<!--fullDescription-->
By default, rows are sorted according to the data source. Set the **sortOrder** option to sort rows in a required order. If you need to sort by multiple columns, specify the [sortIndex]({basewidgetpath}/Configuration/columns/#sortIndex) option as well, or otherwise, each sorted column will get a sort index according to the position in the **columns** array.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `SortOrder` enum. This enum accepts the following values: `Asc` and `Desc`.

#####See Also#####
- [sorting]({basewidgetpath}/Configuration/sorting/)
<!--/fullDescription-->