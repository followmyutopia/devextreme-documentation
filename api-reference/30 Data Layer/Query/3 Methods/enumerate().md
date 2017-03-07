<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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