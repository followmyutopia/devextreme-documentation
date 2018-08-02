===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'all' | 'multiple' | 'none' | 'single'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies item selection mode.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values.

- *'none'*  
 Selection is disabled.

- *'single'*  
 A user can select only a single item.

- *'multiple'*  
 A user can select several items.

- *'all'*  
 The **multiple** mode with a check box that selects/unselects all items.  
 If paging is enabled, the select all check box selects only items that have been already loaded.

 [note]The check box that selects/unselects all items is displayed only if the [showSelectionControls]({basewidgetpath}/Configuration/#showSelectionControls) option is enabled. Otherwise, the 'all' mode works as 'multiple'.

#include common-ref-enum with {
    enum: "`ListSelectionMode`",
    values: "`Single`, `Multiple`, `All`, and `None`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/"
}

#####See Also#####
- [List - Selection - User Interaction](/Documentation/Guide/Widgets/List/Selection/#User_Interaction)
<!--/fullDescription-->