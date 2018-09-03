===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to aggregate data for the total summary item.
<!--/shortDescription-->

<!--fullDescription-->
The following summary types are supported:

- *"sum"*        

- *"min"*        

- *"max"*        

- *"avg"*        

- *"count"*        

- *"custom"*        
Applies a custom client-side aggregate function ([calculateCustomSummary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary)). Refer to [Client-Side Data Aggregation](/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/#Client-Side_Data_Aggregation) for more information.

- *Any other type*      
Applies a custom server-side aggregate function. Refer to [Server-Side Data Aggregation](/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation) for more information.

#include common-ref-enum with {
    enum: "`SummaryType`",
    values: "`Sum`, `Min`, `Max`, `Avg`, `Count`, and `Custom`"
} To apply a custom server-side aggregate function, use a string overload instead. 

#####See Also#####
- [Total Summary](/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/)
<!--/fullDescription-->