Follow these steps to configure custom client-side data aggregation for a field:

1. Make sure that the [remoteOperations](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations) option is not set or set to **false**.

1. Set the field's [summaryType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType) option to *"custom"*.

1. Implement the [calculateCustomSummary](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary) function as detailed in its description.