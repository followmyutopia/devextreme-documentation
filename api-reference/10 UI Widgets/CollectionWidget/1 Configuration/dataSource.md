---
id: CollectionWidget.Options.dataSource
type: String | Array<String, CollectionWidgetItem> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to data.

---
#include common-dataSource-description with {
    widget_works_with: "The **{WidgetName}** works with collections of `string` values or objects.",

    object_structure_notes: "If the data source provides objects, also specify the [itemTemplate]({basewidgetpath}/Configuration/#itemTemplate). You can skip this part if the objects contain fields described in the [Default Item Template]({basewidgetpath}/Default_Item_Template/) section.",
    
    dataSource_items_note: "- Do not specify the [items]({basewidgetpath}/Configuration/#items) option if you specified the **dataSource**, and vice versa."
}