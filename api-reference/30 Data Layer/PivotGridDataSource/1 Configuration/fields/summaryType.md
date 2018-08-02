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

The following list describes available summary types:

- *"sum"*        
Calculates the sum of all fact values.

- *"min"*        
Calculates the minimum fact value.

- *"max"*        
Calculates the maximum fact value.

- *"avg"*        
Calculates the average of all fact values.

- *"count"*        
Calculates the number of facts.

- *"custom"*    
Applies a custom aggregate function specified in the [calculateCustomSummary](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary) option.

You can implement the capability to select the summary type at runtime using instructions from the [Runtime Summary Type Selection](/Documentation/Guide/Widgets/PivotGrid/Summaries/#Runtime_Summary_Type_Selection) article.

#include common-ref-enum with {
    enum: "`SummaryType`",
    values: "`Sum`, `Min`, `Max`, `Avg`, `Count`, and `Custom`"
}
<!--/fullDescription-->