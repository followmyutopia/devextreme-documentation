<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'allPages'<!--/default-->
<!--acceptValues-->'page' | 'allPages'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the mode in which all the records are selected. Applies only if **selection** | [allowSelectAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll) is *true*.
<!--/shortDescription-->

<!--fullDescription-->
**selectAllMode** specifies how records should be selected on clicking the ["Select All" check box](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Selection_Column) and by calling the [selectAll()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectAll)/[deselectAll()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectAll) methods. The following modes are available.

- *'page'*  
 Selects records on currently rendered pages.       
 [note]This mode is incompatible with [deferred selection](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred).

- *'allPages'*  
 Selects records on all pages.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `SelectAllMode` enum. This enum accepts the following values: `Page` and `AllPages`.

<a href=" https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-selection-multiple_record_selection_modes" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a> 

<!--/fullDescription-->
