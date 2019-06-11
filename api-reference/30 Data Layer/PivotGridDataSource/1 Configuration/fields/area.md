<!--id-->PivotGridDataSource.Options.fields.area<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->undefined | 'column' | 'data' | 'filter' | 'row'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the field's area.
<!--/shortDescription-->

<!--fullDescription-->
The field does not belong to any area if this option is **undefined**. However, the field's header is displayed in the [field chooser](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser), which enables the user to move this field to any area. In other cases, the field is displayed in the specified area.
 
#include common-ref-enum with {
    enum: "`PivotGridArea`",
    values: "`Row`, `Column`, `Data`, and `Filter`"
}

#####See Also#####
- [Fields and Areas](/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/)
- **fields[]**.[isMeasure](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#isMeasure)
- [getAreaFields(area, collectGroups)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups)
<!--/fullDescription-->