---
id: dxSpeedDialAction.Options.onClick
type: function(e)
EventForAction: dxSpeedDialAction.click
---
---
##### shortDescription
A function that is executed when the FAB or speed dial action button is clicked or tapped.

##### param(e): Object
Information about the event that caused the function execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview/jQuery/MaterialBlueLight/"
}