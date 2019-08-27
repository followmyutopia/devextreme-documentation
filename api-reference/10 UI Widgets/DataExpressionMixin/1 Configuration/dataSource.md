---
id: DataExpressionMixin.Options.dataSource
type: String | Array<CollectionWidgetItem, Object> | DataSource | DataSource_Options
default: null
---
---
##### shortDescription
Binds the widget to data.

---
#include common-dataSource-description with {
    widget_works_with: "The **{WidgetName}** works with collections of objects or `string`, `number`, or `boolean` values.",

    object_structure_notes: "In each case, also specify the [valueExpr]({basewidgetpath}/Configuration/#valueExpr), [displayExpr]({basewidgetpath}/Configuration/#displayExpr), or both if the data source provides objects.",

    dataSource_items_note: "- Do not specify the [items]({basewidgetpath}/Configuration/#items) option if you specified the **dataSource**, and vice versa."
}