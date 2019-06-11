<!--id-->DataSource.Options.pushAggregationTimeout<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the period (in milliseconds) when changes are aggregated before pushing them to the **DataSource**. 
<!--/shortDescription-->

<!--fullDescription-->
When this option is **undefined**, the aggregation period is calculated automatically based on the rendering speed's measurements.

#####See Also#####
- **push(changes)** in: [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/Methods/#pushchanges) | [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges) | [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/Methods/#pushchanges) | [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#pushchanges)
- [reshapeOnPush](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush)
<!--/fullDescription-->