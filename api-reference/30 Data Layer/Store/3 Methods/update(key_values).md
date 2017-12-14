===================================================================
===================================================================

<!--shortDescription-->
Updates the data item specified by the key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->Object|String|Number<!--/paramType1-->
<!--paramDescription1-->
The key value of the item being updated.
<!--/paramDescription1-->

<!--paramName2-->values<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
The object containing new values for the specified item.
<!--/paramDescription2-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the item is updated. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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