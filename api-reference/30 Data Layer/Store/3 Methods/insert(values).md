<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
A Promise that is resolved after the item is inserted. It is a [jQuery.Promise](http://api.jquery.com/Types/#Promise) if the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag is enabled and a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) otherwise.
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