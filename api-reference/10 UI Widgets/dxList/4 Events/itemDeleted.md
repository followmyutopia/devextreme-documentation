---
id: dxList.itemDeleted
type: eventType
hidden: false
---
---
##### shortDescription
Raised after a list item is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemData): Object
The removed item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The removed item's index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onItemDeleted](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemDeleted)

#####See Also#####
- [List - Handle Deletion-Related Events](/Documentation/Guide/Widgets/List/Item_Deletion/#Events)
#include common-link-handleevents