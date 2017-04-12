<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/Framework/DataGridTutorial/Step8/grid.html" data-show-first="grid.html">
When paging is used, data from the source is loaded page-by-page, while size of the pages is specified by the **paging** | [pageSize](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize) option. To navigate through pages, you can use a [pager](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Pager) and/or scrolling. To configure the pager, use options of the [pager](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/) object. Scrolling options can be set in the [scrolling](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/) object.

If you have decided to use the pager, you can allow an end-user to change the page size at runtime. Specify the available page sizes using the [allowedPageSizes](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#allowedPageSizes) option of the **pager** object.

If scrolling is your choice, set one of the scrolling modes using the **scrolling** | [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#mode) option. Note that you can use both the pager and scrolling if it suits your needs best, although the *"infinite"* mode of scrolling can not be combined with the pager.
  
Due to the small size of the data source, the grid in our example uses a pager to navigate through pages. The page size is set to 7.
  
You have completed configuring the main appearance of the **DataGrid** widget. In the following steps, you will discover how to manipulate data in a grid.
</article>