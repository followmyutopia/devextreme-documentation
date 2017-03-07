<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Restores DataSource to non-loaded state and calls the load method with existing load options.
<!--/d-->
<!--rd-->A Promise of jQuery Deferred object which is resolved when load in complete and rejected if load fails<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Clears currently loaded **DataSource** items and calls the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method.
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of a jQuery Deferred object, which is resolved when loading is complete and rejected when loading fails.
<!--/returnDescription-->

<!--fullDescription-->

The Promise object returned by the **reload()** method is extended by the **operationId** field. Pass its value to the [cancel(operationId)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#canceloperationId) method to cancel the invoked operation.

    <!--JavaScript-->
    var reloadPromise = dataSource.reload();
    reloadPromise.done(function(result) {
        . . .
    });
    . . .
    dataSource.cancel(reloadPromise.operationId);

<!--/fullDescription-->