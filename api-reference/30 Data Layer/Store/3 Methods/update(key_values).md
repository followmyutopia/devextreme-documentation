<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Initiates the update operation. Async function.
<!--/d-->
<!--p1d-->Key value identifying the data item to update<!--/p1d-->
<!--p2d-->New data values<!--/p2d-->
<!--rd-->Promise of jQuery.Deferred which resolves with (any key, object newValues) or rejects with (Error)<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Updates the data item specified by the key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->object|string|number<!--/paramType1-->
<!--paramDescription1-->
The key value of the item being updated.
<!--/paramDescription1-->

<!--paramName2-->values<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
The object containing new values for the specified item.
<!--/paramDescription2-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been updated.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    store.update(key, values)
        .done(function(key, result) {
            // "key" contains the key of the updated item
            // "result" contains the updated item itself
        })
        .fail(function(error) {
            // handle error
        });
<!--/fullDescription-->