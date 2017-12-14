===================================================================
===================================================================

<!--shortDescription-->
Removes the data item specified by the key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->Object|String|Number<!--/paramType1-->
<!--paramDescription1-->
The data item key value.
<!--/paramDescription1-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the item is removed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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