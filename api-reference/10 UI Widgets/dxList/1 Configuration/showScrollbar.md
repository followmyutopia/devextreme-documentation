---
id: dxList.Options.showScrollbar
acceptValues: 'always' | 'never' | 'onHover' | 'onScroll'
type: String
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the widget shows the scrollbar.

---
Setting this option makes sense only when the [useNativeScrolling]({basewidgetpath}/Configuration/#useNativeScrolling) option is set to **false**.

#include common-ref-enum with {
    enum: "`ShowScrollbarMode`",
    values: "`OnScroll`, `OnHover`, `Always`, and `Never`"
}

#####See Also#####
- [List - Scrolling - User Interaction](/Documentation/Guide/Widgets/List/Scrolling/#User_Interaction)