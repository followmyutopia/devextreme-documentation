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
A Promise that is resolved after the operation is completed. It is a [jQuery.Promise](http://api.jquery.com/Types/#Promise) if the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag is enabled and a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) otherwise.
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