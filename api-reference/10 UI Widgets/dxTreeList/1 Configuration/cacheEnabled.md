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
When this option is set to *true*, data loaded once is saved in cache. Then, the widget takes data from this cache when performing such operations as sorting, grouping, paging, etc. Caching is helpful when the data source takes significant time to load, but consider disabling it for frequently changing data sources. 

To update data in cache, call the [refresh()]({basewidgetpath}/Methods/#refresh) method of the widget or the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method of the **DataSource**.

#####See Also#####
- [getDataSource()]({basewidgetpath}/Methods/#getDataSource)
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->