===========================================================================
<!--default-->'allPages'<!--/default-->
<!--acceptValues-->'allPages' | 'page'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the mode in which all the records are selected. Applies only if **selection**.[allowSelectAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll) is **true**.
<!--/shortDescription-->

<!--fullDescription-->
**selectAllMode** specifies how records should be selected on clicking the ["Select All" check box](/Documentation/Guide/Widgets/DataGrid/Selection/#User_Interaction) and by calling the [selectAll()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectAll)/[deselectAll()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectAll) methods. The following modes are available.

- *'page'*  
 Selects records on currently rendered pages.       
 
 [note]This mode is incompatible with [deferred selection](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred).

- *'allPages'*  
 Selects records on all pages.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SelectAllMode` enum. This enum accepts the following values: `Page` and `AllPages`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/data_grid-selection-multiple_record_selection_modes"
} 


#####See Also#####
- [Selection - User Interaction](/Documentation/Guide/Widgets/DataGrid/Selection/#User_Interaction)
<!--/fullDescription-->