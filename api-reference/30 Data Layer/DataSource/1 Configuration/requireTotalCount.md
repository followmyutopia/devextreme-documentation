<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Initial value of requireTotalCount option. Passed to DataStore during loading (Will work only if DataStore supports mechanism of including total count of items in response).<!--/d-->
===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not the DataSource instance requests the total count of items available in the storage.
<!--/shortDescription-->

<!--fullDescription-->
If this option is set to *true*, the **done** callback of the **Deferred.Promise** returned by the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method will hold the **extra** argument containing the **totalCount**, which holds the total count of data source items.
<!--/fullDescription-->