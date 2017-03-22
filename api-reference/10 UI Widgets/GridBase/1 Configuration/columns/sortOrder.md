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
Specifies the initial sort order of column values.
<!--/shortDescription-->

<!--fullDescription-->
By default, records in a grid are ordered according to the data source. You can, however, set a different initial sort order for the records in one or several columns. To sort grid records by one column, specify the required order using the **sortOrder** option. To sort grid records by several columns, use the [sortIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortIndex) option in addition to the **sortOrder** option.

[note] If you specify the **sortOrder** option for several columns omitting the **sortIndex** option, a sort index will be assigned to each sort column according to its position in the **columns** array.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `SortOrder` enum. This enum accepts the following values: `Asc` and `Desc`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridfilteringandsortingsorting/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->