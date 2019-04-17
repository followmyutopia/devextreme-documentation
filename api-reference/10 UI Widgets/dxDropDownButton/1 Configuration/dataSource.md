===========================================================================
<!--default-->null<!--/default-->
<!--type-->String | Array<CollectionWidgetItem, Object> | DataSource | DataSource_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Provides data for the drop-down menu.
<!--/shortDescription-->

<!--fullDescription-->
#include common-dataSource-description with {
    widget_works_with: "The **DropDownButton** works with collections of objects or `string` or `number` values.",

    object_structure_notes: "If the data source provides objects, also specify the [keyExpr]({basewidgetpath}/Configuration/#valueExpr) and [displayExpr]({basewidgetpath}/Configuration/#displayExpr) options. Note that [particular fields](/Documentation/ApiReference/UI_Widgets/dxList/Default_Item_Template/) in the objects can control the widget's appearance. See the [Default Templates](/Documentation/Guide/Widgets/Common/Templates/#Default_Templates) for more information.",

    dataSource_items_note: "- Do not specify the [items]({basewidgetpath}/Configuration/#items) option if you specified the **dataSource**, and vice versa."
}
<!--/fullDescription-->
