<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
If paging enabled, then is set to true when last loading returned less items than pageSize. If paging disabled, always returns true.
<!--/d-->
<!--rd-->True if current page is last page<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Indicates whether or not the current page contains fewer items than the number of items specified by the [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) configuration option.
<!--/shortDescription-->

<!--returnType-->boolean<!--/returnType-->
<!--returnDescription-->
If the loaded page size is less then the specified page size, the value is true; otherwise, the value is false.
<!--/returnDescription-->

<!--fullDescription-->
[note] If [paging](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) is disabled, the method always returns *true*.
<!--/fullDescription-->