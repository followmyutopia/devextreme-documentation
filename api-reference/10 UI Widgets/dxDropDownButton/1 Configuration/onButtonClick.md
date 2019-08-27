---
id: dxDropDownButton.Options.onButtonClick
type: function(e) | String
default: null
EventForAction: dxDropDownButton.buttonClick
---
---
##### shortDescription
A function that is executed when the button is clicked or tapped. If [splitButton](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#splitButton) is **true**, this function is executed for the action button only.

##### param(e): Object
Information about the event that caused the function execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.selectedItem): Object
The selected item's data. Available when [useSelectMode](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#useSelectMode) is **true**.

---
