---
##### merge

---
#include common-dataSource-description with {
    widget_works_with: "The **DropDownBox** works with collections of objects or `string`, `number`, or `boolean` values. ",

    object_structure_notes: "In each case, also specify the [valueExpr](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#valueExpr) and [displayExpr](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#displayExpr) options if the data source provides objects. ",

    additional_data_binding_actions: "If the element embedded in the **DropDownBox** widget is another DevExtreme widget, their data sources should be interrelated. Refer to the [Synchronize with the Embedded Element](/Documentation/Guide/Widgets/DropDownBox/Synchronize_with_the_Embedded_Element/) article for more information.",

    dataSource_items_note: "- Do not specify the [items]({basewidgetpath}/Configuration/#items) option if you specified the **dataSource**, and vice versa."
}