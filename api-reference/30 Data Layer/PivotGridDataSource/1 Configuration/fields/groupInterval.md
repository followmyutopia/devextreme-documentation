<!--id-->PivotGridDataSource.Options.fields.groupInterval<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'day' | 'dayOfWeek' | 'month' | 'quarter' | 'year'<!--/acceptValues-->
<!--type-->String | Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the field's values are combined into groups for the [headers](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers). Cannot be used with an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).
<!--/shortDescription-->

<!--fullDescription-->
If the field's values are dates, specify this option with one of the accepted string values.

If the field's values are numbers, specify this option with a number that designates a step with which groups should be generated.

#include common-ref-enum with {
    enum: "`PivotGridGroupInterval`",
    values: "`Year`, `Quarter`, `Month`, `DayOfWeek`, and `Day`"
}

#####See Also#####
- [Data Grouping](/Documentation/Guide/Widgets/PivotGrid/Grouping/#Data_Grouping)
- **fields[]**.[selector](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#selector)
<!--/fullDescription-->