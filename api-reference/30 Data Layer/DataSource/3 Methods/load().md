<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Starts loading data.
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved when the data has loaded.
<!--/returnDescription-->

<!--fullDescription-->
Use the following code to access the loaded data.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            // 'result' contains the loaded data
        })
        .fail(function(error) {
            // handle error
        });

The Promise object returned by the **load()** method is extended by the **operationId** field. Pass its value to the [cancel(operationId)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#canceloperationId) method to cancel the invoked operation.

    <!--JavaScript-->
    var loadPromise = dataSource.load();
    loadPromise.done(function(result) {
        . . .
    });
    . . .
    dataSource.cancel(loadPromise.operationId);

<!--/fullDescription-->