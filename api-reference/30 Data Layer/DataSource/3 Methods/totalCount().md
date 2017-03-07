<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Returns number of data items available in data store for last load operation without paging. The value is available only if Store supports it and requireTotalCount option of previously performed request was set to true. Otherwise -1.
<!--/d-->
<!--rd-->Total count of data items<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the number of data items available in an underlying [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) after the last **load()** operation without paging.
<!--/shortDescription-->

<!--returnType-->numeric<!--/returnType-->
<!--returnDescription-->
The number of items.
<!--/returnDescription-->

<!--fullDescription-->
To use this method, set the [requireTotalCount](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#requireTotalCount) option to *true*.
<!--/fullDescription-->