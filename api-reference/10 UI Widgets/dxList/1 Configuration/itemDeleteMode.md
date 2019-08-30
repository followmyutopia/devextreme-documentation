---
id: dxList.Options.itemDeleteMode
acceptValues: 'context' | 'slideButton' | 'slideItem' | 'static' | 'swipe' | 'toggle'
type: String
default: 'static', 'slideItem' (iOS), 'swipe' (Android)
---
---
##### shortDescription
Specifies the way a user can delete items from the list.

---
[note]If **List** items are [supplied with the context menu](/Documentation/Guide/Widgets/List/Item_Context_Menu/), this option is ignored in favor of the [menuMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuMode) option.

#include common-ref-enum with {
     enum: "`ListItemDeleteMode`",
     values: "`Static`, `Toggle`, `SlideButton`, `SlideItem`, `Swipe`, and `Context`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/"
}

#####See Also#####
- [List - Item Deletion - User Interaction](/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction)