===========================================================================
<!--default-->'page'<!--/default-->
<!--acceptValues-->'allPages' | 'page'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the mode in which all items are selected.
<!--/shortDescription-->

<!--fullDescription-->
The **selectAllMode** specifies how records should be selected on clicking the "Select All" check box. The following modes are available: 

- *'page'*  
 Selects items on the currently rendered pages.

- *'allPages'*  
 Selects items on all pages.

[note]The **selectAllMode** applies only if the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode) is set to *all* and [the selection controls are shown](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#showSelectionControls).

#####See Also#####
- [List - Selection - User Interaction](/Documentation/Guide/Widgets/List/Selection/#User_Interaction)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/"
}
<!--/fullDescription-->