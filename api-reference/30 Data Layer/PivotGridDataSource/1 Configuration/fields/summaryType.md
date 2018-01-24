===========================================================================
<!--default-->'count'<!--/default-->
<!--acceptValues-->'avg' | 'count' | 'custom' | 'max' | 'min' | 'sum'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to aggregate field data. Cannot be used for the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) store type.
<!--/shortDescription-->

<!--fullDescription-->
The following list gives an overview of available summary types.

- *"sum"*        
Sums up all [facts](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values) within an area.
- *"min"*        
Calculates the minimum [fact](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values)'s value.
- *"max"*        
Calculates the maximum [fact](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values)'s value.
- *"avg"*        
Calculates the average of all [facts](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values) within an area.
- *"count"*        
Calculates the number of [facts](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values) within an area.
- *"custom"*    
Allows you to specify a custom aggregate function using the [calculateCustomSummary](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary) option.

You can allow the user to change the summary type at runtime. Learn how to implement this capability from the [Runtime Summary Type Selection](/Documentation/Guide/Widgets/PivotGrid/Summaries/#Runtime_Summary_Type_Selection) topic.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SummaryType` enum. This enum accepts the following values: `Sum`, `Min`, `Max`, `Avg`, `Count` and `Custom`.
<!--/fullDescription-->