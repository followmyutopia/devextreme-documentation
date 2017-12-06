===================================================================
===================================================================

<!--shortDescription-->
Starts loading data.
<!--/shortDescription-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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