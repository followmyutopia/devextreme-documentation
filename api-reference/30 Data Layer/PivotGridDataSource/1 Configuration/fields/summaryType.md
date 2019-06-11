<!--id-->PivotGridDataSource.Options.fields.summaryType<!--/id-->
===========================================================================
<!--default-->'count'<!--/default-->
<!--acceptValues-->'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to aggregate the field's data. Cannot be used with an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).
<!--/shortDescription-->

<!--fullDescription-->
The summary type defines how to calculate the summary values that are displayed in the pivot grid's cells. The calculation is performed on a subset of [facts](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values) that correspond to each field value in three areas (column, row, and filter).

The following summary types are supported:

- *"sum"*        

- *"min"*        

- *"max"*        

- *"avg"*        

- *"count"*        

- *"custom"*        
Applies a custom client-side aggregate function ([calculateCustomSummary](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary)). Refer to [Client-Side Data Aggregation](/Documentation/Guide/Widgets/PivotGrid/Summaries/#Custom_Aggregate_Function/Client-Side_Data_Aggregation) for more information.

- *Any other type*      
Applies a custom server-side aggregate function. Refer to [Server-Side Data Aggregation](/Documentation/Guide/Widgets/PivotGrid/Summaries/#Custom_Aggregate_Function/Server-Side_Data_Aggregation) for more information.

#include common-ref-enum with {
    enum: "`SummaryType`",
    values: "`Sum`, `Min`, `Max`, `Avg`, `Count`, and `Custom`"
}  To apply a custom server-side aggregate function, use a string overload instead. 

You can implement the capability to select the summary type at runtime using instructions from the [Runtime Summary Type Selection](/Documentation/Guide/Widgets/PivotGrid/Summaries/#Runtime_Summary_Type_Selection) article.
<!--/fullDescription-->