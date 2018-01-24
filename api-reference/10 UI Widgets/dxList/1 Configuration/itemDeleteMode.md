===========================================================================
<!--default-->'static', 'slideItem' (iOS), 'swipe' (Android), 'context' (Windows_Mobile)<!--/default-->
<!--acceptValues-->'context' | 'slideButton' | 'slideItem' | 'static' | 'swipe' | 'toggle'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the way a user can delete items from the list.
<!--/shortDescription-->

<!--fullDescription-->
[note]If **List** items are [supplied with the context menu](/Documentation/Guide/Widgets/List/Item_Context_Menu/), this option is ignored in favor of the [menuMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuMode) option.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ListItemDeleteMode` enum. This enum accepts the following values: `Static`, `Toggle`, `SlideButton`, `SlideItem`, `Swipe` and `Context`.

#####See Also#####
- [List - Item Deletion - User Interaction](/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/"
}
<!--/fullDescription-->