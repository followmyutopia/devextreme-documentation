---
id: dxPivotGridFieldChooser.contextMenuPreparing
type: eventType
---
---
##### shortDescription
Raised before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.area): String
The clicked [area's](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) type.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.field): PivotGridDataSource_Options_fields
The [configuration](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) of the field on which the context menu is invoked.

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/) section.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onContextMenuPreparing](/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Configuration/#onContextMenuPreparing)

#####See Also#####
#include common-link-handleevents