<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Clears currently loaded **DataSource** items and calls the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method.
<!--/shortDescription-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after loading is completed and rejected after loading failed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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