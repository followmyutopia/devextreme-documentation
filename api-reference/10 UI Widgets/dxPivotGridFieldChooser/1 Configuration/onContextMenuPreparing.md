---
id: dxPivotGridFieldChooser.Options.onContextMenuPreparing
type: function(e)
default: null
EventForAction: dxPivotGridFieldChooser.contextMenuPreparing
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.area): String
The clicked [area's](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') type.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.field): PivotGridDataSource_Options_fields
The [configuration](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/fields.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') of the field on which the context menu is invoked.

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template/Default%20Item%20Template.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/') section.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
