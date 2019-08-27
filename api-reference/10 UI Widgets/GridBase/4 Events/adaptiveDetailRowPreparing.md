---
id: GridBase.adaptiveDetailRowPreparing
type: eventType
---
---
##### shortDescription
Raised before an adaptive detail row is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.formOptions): Object
The options of the [Form](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/) widget.

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
Main article: [onAdaptiveDetailRowPreparing]({basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing)

#####See Also#####
#include common-link-handleevents