---
id: dxList.Options.onSelectAllValueChanged
type: function(e)
default: null
EventForAction: dxList.selectAllValueChanged
---
---
##### shortDescription
A function that is executed when the "Select All" check box value is changed. Applies only if the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode) is *"all"*.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
#####See Also#####
- [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode)
- [List - Handle Selection-Related Events](/Documentation/Guide/Widgets/List/Selection/#Events)