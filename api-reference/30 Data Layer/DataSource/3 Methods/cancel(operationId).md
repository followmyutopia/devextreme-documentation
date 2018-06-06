===================================================================
===================================================================

<!--shortDescription-->
Cancels the load operation with a specific identifier.
<!--/shortDescription-->

<!--returnType-->Boolean<!--/returnType-->
<!--returnDescription-->
**true** if the operation was canceled; **false** if it was not found.
<!--/returnDescription-->

<!--fullDescription-->
You can access the operation identifier using the **operationId** field that extends the Promise object returned from the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) and [reload()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload) methods.

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    var loadPromise = ds.load();
    loadPromise.done(function (result) {
        // ...
    });

    ds.cancel(loadPromise.operationId);

[note] Calling this method does not interrupt the HTTP request.
<!--/fullDescription-->