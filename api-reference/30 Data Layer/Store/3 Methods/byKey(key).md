<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Initiates loading of a single data item by key. Async function.
<!--/d-->
<!--p1d-->Key value<!--/p1d-->
<!--rd-->Promise of jQuery.Deferred which resolves with (object dataItem) or rejects with (Error)<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the data item specified by the key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->object|string|number<!--/paramType1-->
<!--paramDescription1-->
Specifies the key value of the required items.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been loaded.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an item whose key property value equals **15**.

    <!--JavaScript-->
    store.byKey(15).done(function(dataItem) {
            // process 'dataItem'
        }).fail(function(error) {
            // handle error
        });
<!--/fullDescription-->