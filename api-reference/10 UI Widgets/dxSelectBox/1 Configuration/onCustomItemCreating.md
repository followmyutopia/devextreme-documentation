---
id: dxSelectBox.Options.onCustomItemCreating
type: function(e)
default: function(e) { if(!e.customItem) { e.customItem = e.text; } }
EventForAction: dxSelectBox.customItemCreating
---
---
##### shortDescription
A function that is executed when a user adds a custom item. Requires [acceptCustomValue]({basewidgetpath}/Configuration/#acceptCustomValue) to be set to **true**.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.customItem): String | Object | Promise<any>
The field where to place a custom item.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.text): String
The input field's text.

---
#####See Also#####
- [SelectBox - Create a User-Defined Item](/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/)
- [TagBox - Create a User-Defined Item](/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/)