---
id: dxPivotGrid.Options.headerFilter
type: Object
---
---
##### shortDescription
Configures the header filter feature.

---
A header filter allows a user to filter individual field's values by including or excluding them from the applied filter. Clicking a header filter icon in the [field chooser](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser) or the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel) invokes a popup menu displaying all the unique field values. 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget Pivot Grid Header Filter](/Content/images/doc/19_2/DataGrid/PivotGrid_headerFilter.png)

Assign **true** to the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowFiltering) option to make the icons visible. To customize a specific field's header filter, use the field's [headerFilter](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/headerFilter/) object.

#include datagrid-filtering-selectallmodifiesfiltertype with {
    filterValuesLink: "/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues",
    filterTypeLink: "/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterType"
}

#####See Also#####
- [Filtering](/Documentation/Guide/Widgets/PivotGrid/Filtering/)