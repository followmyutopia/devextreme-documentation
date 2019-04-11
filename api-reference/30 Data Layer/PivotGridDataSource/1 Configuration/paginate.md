===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the **PivotGridDataSource** should load data in portions.
<!--/shortDescription-->

<!--fullDescription-->
Paging has the following specifics:

- **scrolling**.[mode](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/scrolling/#mode) should be *"virtual"*.
- Data should come from a remote source because other data processing operations also become [remote](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations) when you enable paging.
- [allowExpandAll](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowExpandAll) and [allowSortingBySummary](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSortingBySummary) are ignored.
- [Running totals](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#runningTotal) and the *"absoluteVariation"* and *"percentVariation*" [summary post-processing functions](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode) are calculated only for loaded data.
- [Grouped items](/Documentation/Guide/Widgets/PivotGrid/Grouping/#Fields_Grouping) in the [header filter](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/headerFilter/) are not paginated. 
<!--/fullDescription-->
