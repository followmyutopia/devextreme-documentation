<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Initiates the insert operation. Async function.
<!--/d-->
<!--p1d-->Data item to insert<!--/p1d-->
<!--rd-->Promise of jQuery.Deferred which resolves with (object values, any key) or rejects with (Error)<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Adds an item to the data associated with this Store.
<!--/shortDescription-->

<!--paramName1-->values<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object representing the new item.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been inserted.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    store.insert({
            id: 5,
            name: "item1",
            value: 10
        })
        .done(function(values, key) {
            //'values' contains the inserted item values
            //'key' contains the inserted item key
        })
        .fail(function(error) {
            //handle error
        });

[note] If data already contains an object with the same key property value as the object being inserted, the insertion fails.
<!--/fullDescription-->