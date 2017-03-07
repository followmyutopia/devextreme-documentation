<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Starts query execution. Async function.
<!--/d-->
<!--rd-->Promise of jQuery.Deferred which resolves with an array of data item or rejects with a Error object<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Executes the [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the operation is completed.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    DevExpress.data.query("http://www.example.com/service.url", queryOptions)
        .enumerate()
        .done(function(result) {
            // 'result' holds the got array
        });

This method is an alternate to the [toArray()](/Documentation/ApiReference/Data_Layer/Query/Methods/#toArray) method. The same result, but different form.
<!--/fullDescription-->