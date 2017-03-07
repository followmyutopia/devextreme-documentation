<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Initiates the remove operation. Async function.
<!--/d-->
<!--p1d-->Key value identifying the data item to remove<!--/p1d-->
<!--rd-->Promise of jQuery.Deferred which resolves with (any key, object newValues) or rejects with (Error)<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Removes the data item specified by the key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->object|string|number<!--/paramType1-->
<!--paramDescription1-->
The data item key value.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been removed.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    store.remove(key)
        .done(function() {
            // handle success
        })
        .fail(function(error) {
            // handle error
        });
<!--/fullDescription-->