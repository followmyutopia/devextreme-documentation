<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies paging options.
<!--/shortDescription-->

<!--fullDescription-->
In **DataGrid**, records can be loaded either page by page or all at once. Needless to say that the latter approach affects grid performance, especially when the number of loading records is very large. If you, however, want to use it, disable paging by setting the **paging** | **enabled** option to *false*.

When paging is on, you can specify the size of grid pages using the [pageSize](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize) option. Additionally, if you require displaying grid records starting with a certain page, assign its index to the [pageIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageIndex) option.

A paginated grid can be navigated by a user at runtime. For this purpose, he or she can use a [pager](/Documentation/Guide/Widgets/DataGrid/Data_Navigation/#Pager_Navigation) or [scrolling](/Documentation/Guide/Widgets/DataGrid/Data_Navigation/#Scrolling).

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridpagingandscrollingpager/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->