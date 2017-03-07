To configure a data field for using one of the predefined aggregation methods, set the [summaryType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType) option to one of the following values.

- *"sum"*		
Sums up all [facts](/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values) within an area.
- *"min"*		
Calculates the minimum [fact](/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values)'s value.
- *"max"*		
Calculates the maximum [fact](/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values)'s value.
- *"avg"*		
Calculates the average of all [facts](/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values) within an area.
- *"count"*		
Calculates the number of [facts](/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values) within an area.

You can configure the type of a value held in a field using the [dataType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataType) option. This is useful when field data has an unusual format, for example, a date saved as a string. When the **dataType** is not set, it is defined automatically.