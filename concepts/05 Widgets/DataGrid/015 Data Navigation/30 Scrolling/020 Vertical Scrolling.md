Vertical scrolling is the main type of scrolling that enables a user to navigate through grid records. To scroll, the user can drag a scroll bar, which is located on the right side of a grid, or use the mouse wheel.

**DataGrid** supports three modes of vertical scrolling: standard, virtual and infinite. To specify the scrolling mode, set the [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#mode) option of the **scrolling** object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		scrolling: {
			mode: 'standard' // 'virtual' || 'infinite'
		}
    });


* **Standard Mode**		
In a standard scrolling mode, the grid loads one page at once. This operation may affect grid performance as the loaded page may contain many grid records. Moreover, if the [pager](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Pager) is disabled, a user can see only the first page. Thus, using this mode is recommended only when you have a small data source or display a large data source using the pager for navigation purposes.

* **Virtual Mode**		
In a virtual scrolling mode, the grid loads pages at runtime when they get into its field of vision. Once a page is out of the field of vision, it is removed from the grid. This behavior allows an end-user to scroll through large amounts of grid records without notable lags. To specify the size of loaded pages, use the **paging** | [pageSize](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize) option. Note that in this scrolling mode, the scroll bar is positioned considering the total number of grid records. This feature allows the user to move from the first to the last grid record promptly even when there are thousands of records between them.  
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/VirtualScrolling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Virtual Scrolling Demo</a>

* **Infinite Mode**			
If it is necessary to move gradually from the beginning to the end of the grid, use scrolling in the infinite mode. Grid pages in this mode are loaded when the scroll bar reaches the end of its scale. This scrolling mode requires paging to be [enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#enabled). The size of a page is specified by the **pageSize** option as well.  
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/InfiniteScrolling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Infinite Scrolling Demo</a>

    [note]When you use infinite scrolling in conjunction with grouping, consider making groups [noncollapsible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing).

To spot the difference between those scrolling modes, see the example below.
