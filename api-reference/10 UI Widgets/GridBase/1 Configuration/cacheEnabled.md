<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether data should be cached.
<!--/shortDescription-->

<!--fullDescription-->
When this option is set to **true**, data loaded once is saved in cache. Then, the widget takes data from this cache when performing such operations as sorting, grouping, paging, etc. Caching is helpful when the data source takes significant time to load. But, consider disabling it for frequently changing data sources. 

To update data in cache, call the [refresh()]({basewidgetpath}/Methods/#refresh) method of the widget or the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method of the **DataSource**.

[note]If you fetch data from the server, some operations with data can be executed [remotely]({basewidgetpath}/Configuration/remoteOperations/), while others - locally. If you perform basic operations (sorting, filtering, and paging) remotely and advanced operations (grouping and summary calculation) locally, certain user actions will force **DataGrid** to query the server for data repeatedly despite caching being enabled. Particularly, the advanced operations demand data to be reloaded completely  from the server to provide correct results.

#####See Also#####
- [getDataSource()]({basewidgetpath}/Methods/#getDataSource)
<!--/fullDescription-->