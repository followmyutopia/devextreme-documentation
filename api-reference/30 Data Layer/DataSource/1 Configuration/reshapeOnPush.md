===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to reload data after receiving a push update.
<!--/shortDescription-->

<!--fullDescription-->
When this option is **true**, the **DataSource** calls the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) function to perform sorting, filtering, grouping, and other data processing operations.

#####See Also#####
- [pushAggregationTimeout](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pushAggregationTimeout)
- **push(changes)** in: [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/Methods/#pushchanges) | [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges) | [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/Methods/#pushchanges) | [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#pushchanges)
<!--/fullDescription-->