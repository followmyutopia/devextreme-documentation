===========================================================================
<!--default-->0<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the grid page that should be displayed by default.
<!--/shortDescription-->

<!--fullDescription-->
When this option is not specified, a grid displays records starting from the first page. If you need to specify a particular page to start displaying from, assign the index of this page to the **pageIndex** option.

[note] The page index is one less than the page number displayed by the pager. Thus, the first page has 0 index, the second - 1, etc.

In addition, you can set or get the current page index from code using the [pageIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageIndex) method called with or without the argument.

#####See Also#####
- [Paging](/Documentation/Guide/Widgets/DataGrid/Paging/)
<!--/fullDescription-->