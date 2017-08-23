<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'auto'<!--/default-->
<!--acceptValues-->'auto'<!--/acceptValues-->
<!--type-->array | string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the page sizes that can be selected at runtime.
<!--/shortDescription-->

<!--fullDescription-->
When a grid displays data page by page, you can specify the default size of pages using the [pageSize](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize) option. Additionally, you can enable a user to change the page size at runtime. To do this, make the page size selector visible by setting the **pager**.**showPageSizeSelector** option to **true**. After that, specify the sizes that can be selected in it by assigning an array of these sizes to the **pager**.**allowedPageSizes** option. If you do not specify this option, the allowed page sizes will be determined automatically depending on how large the grid data source is.
<!--/fullDescription-->