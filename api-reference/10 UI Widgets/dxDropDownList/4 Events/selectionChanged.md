---
id: dxDropDownList.selectionChanged
type: eventType
---
---
##### shortDescription
Raised when a list item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.selectedItem): Object
The selected item's data.

---
Main article: [onSelectionChanged]({basewidgetpath}/Configuration/#onSelectionChanged)

#####See Also#####
#include common-link-handleevents