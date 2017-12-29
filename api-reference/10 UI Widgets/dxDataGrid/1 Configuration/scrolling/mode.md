===========================================================================
<!--default-->'standard'<!--/default-->
<!--acceptValues-->'standard' | 'virtual' | 'infinite'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the scrolling mode.
<!--/shortDescription-->

<!--fullDescription-->
The following scrolling modes are available in the widget:

- **Standard**      
A user scrolls a single page only. Scrolling appears only if the widget height cannot fit [all rows of a page](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize). In this mode, scrolling is auxiliary, while main navigation is performed with the [pager](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/). If [paging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/) is disabled, the widget loads all rows at once, which may decrease the widget performance. In this case, we recommend choosing another scrolling mode.

- **Virtual**       
Pages are loaded when they get into the viewport and removed once they leave it. Use this mode if a user should be able to scroll data jumping from one page to another.

- **Infinite**      
Each next page is loaded once the scrollbar reaches the end of its scale. Use this mode if a user should scroll data gradually, from the first to the last page.

    [note]Set the **grouping**.[allowCollapsing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing) option to **false** when using infinite scrolling in conjunction with grouping.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `GridScrollingMode` enum. This enum accepts the following values: `Standard`, `Virtual` and `Infinite`.

<a href="/Demos/WidgetsGallery/Demo/Data_Grid/InfiniteScrolling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Infinite Scrolling Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Data_Grid/VirtualScrolling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Virtual Scrolling Demo</a>

#####See Also#####
- [Scrolling](/Documentation/Guide/Widgets/DataGrid/Scrolling/)
<!--/fullDescription-->