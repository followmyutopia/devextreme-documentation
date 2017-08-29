<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'multiple' | 'single' | 'all'<!--/acceptValues-->
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
 Note that if paging is enabled, the select all check box selects only items that have been already loaded.

 [note]The check box that selects/unselects all items is displayed only if the [showSelectionControls]({basewidgetpath}/Configuration/#showSelectionControls) option is enabled. Otherwise, the 'all' mode works as 'multiple'.

 When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ListSelectionMode` enum. This enum accepts the following values: `Single`, `Multiple`, `All` and `None`.

#####See Also#####
- [List - Selection - User Interaction](/Documentation/Guide/Widgets/List/Selection/#User_Interaction)

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->