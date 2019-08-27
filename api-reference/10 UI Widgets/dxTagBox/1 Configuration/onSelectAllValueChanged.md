---
id: dxTagBox.Options.onSelectAllValueChanged
type: function(e)
default: null
EventForAction: dxTagBox.selectAllValueChanged
---
---
##### shortDescription
A function that is executed when the "Select All" check box value is changed. Applies only if [showSelectionControls](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls) is **true**.

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
