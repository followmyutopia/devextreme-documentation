===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether raw data should be saved in the cache. Applies only if [loadMode](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode) is *"raw"*.
<!--/shortDescription-->

<!--fullDescription-->
Data caching allows the **CustomStore** to decrease the number of data requests. On the downside, cached data and data in your source may become out of sync. If keeping them synchronized is crucial in your scenario, disable data caching by setting the **cacheRawData** option to **false**. In this case, the **CustomStore** will send a request for data on every call of the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load), [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) and [totalCount](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#totalCount) functions.

#####See Also#####
- [clearRawDataCache()](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#clearRawDataCache)
<!--/fullDescription-->