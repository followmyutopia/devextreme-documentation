<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Cancels an execution of a load operation associated with passed identifier.
<!--/d-->
<!--rd-->True in case of successful cancellation or false if corresponding to passed identifier operation wasn't found<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Cancels the load operation associated with the specified identifier.
<!--/shortDescription-->

<!--returnType-->boolean<!--/returnType-->
<!--returnDescription-->
Indicates whether the operation is successfully canceled (*true*) or was not found (*false*).
<!--/returnDescription-->

<!--fullDescription-->
You can access the load operation identifier using the **operationId** field extending the Promise object returned by the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) or [reload()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload) method.

    <!--JavaScript-->
    var loadPromise = dataSource.load();
    loadPromise.done(function(result) {
        . . .
    });
    . . .
    dataSource.cancel(loadPromise.operationId);

[note]The **cancel(operationId)** method does not interrupt the HTTP request.
<!--/fullDescription-->