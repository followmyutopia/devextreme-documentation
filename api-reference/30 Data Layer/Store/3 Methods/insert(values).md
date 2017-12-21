===================================================================
===================================================================

<!--shortDescription-->
Adds an item to the Store's data.
<!--/shortDescription-->

<!--paramName1-->values<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A new item.
<!--/paramDescription1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the item is inserted. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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