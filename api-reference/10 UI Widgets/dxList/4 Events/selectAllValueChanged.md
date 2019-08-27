---
id: dxList.selectAllValueChanged
type: eventType
---
---
##### shortDescription
Raised when the "Select All" check box value is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
Main article: [onSelectAllValueChanged](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onSelectAllValueChanged)

#####See Also#####
- [List - Handle Selection-Related Events](/Documentation/Guide/Widgets/List/Selection/#Events)
#include common-link-handleevents