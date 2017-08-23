If you need to expand and collapse master-detail rows programmatically, use the following API methods.

* [expandRow(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandRowkey) &#8212; to expand a specific row		
* [expandAll(-1)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) &#8212; to expand all master rows		
* [collapseRow(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseRowkey) &#8212; to collapse a specific row		
* [collapseAll(-1)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex) &#8212; to collapse all master rows		
* [isRowExpanded(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowExpandedkey) &#8212; to find out whether a specific master row is expanded or collapsed		

[note] Pass the "-1" parameter to the **expandAll()**/**collapseAll()** methods to force expanding/collapsing master rows only.

These API methods work regardless of the [enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#enabled) option, so you can expand/collapse a master section by handling any required event with the [master-detail expand buttons](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#Enable_the_Master-Detail_Interface) hidden.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridmaster-detailmasterdetailsapi/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

In addition to the methods listed above, there is a **grouping**.[autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option that defines the initial rows state.

You can also perform custom actions before or after expanding/collapsing detail sections. For this purpose, use the [rowExpanding](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowExpanding), [rowExpanded](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowExpanded), [rowCollapsing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowCollapsing) and [rowCollapsed](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowCollapsed) events. To learn more about expanding and collapsing groups in the **DataGrid** widget, refer to the [Expanding and Collapsing Groups](/Documentation/Guide/Widgets/DataGrid/Grouping/#Expanding_and_Collapsing_Groups) topic.
