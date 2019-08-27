---
id: dxForm.editorEnterKey
type: eventType
---
---
##### shortDescription
Raised when the Enter key has been pressed while an editor is focused.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.dataField): String
The path to the [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object field associated with the current editor.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Main article: [onEditorEnterKey](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onEditorEnterKey)

#####See Also#####
#include common-link-handleevents