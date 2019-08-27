---
id: PivotGridDataSource.Options.retrieveFields
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to auto-generate pivot grid fields from the [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/)'s data.

---
If you disable this option, the **PivotGrid** contains only the fields configured in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array. With this option enabled, these fields are accompanied by auto-generated fields, which do not belong to any [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) by default and are only available in the [field chooser](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser).

#####See Also#####
- [Fields and Areas](/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/)