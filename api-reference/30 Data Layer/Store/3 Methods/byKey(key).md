===================================================================
===================================================================

<!--shortDescription-->
Gets a data item with a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->Object|String|Number<!--/paramType1-->
<!--paramDescription1-->
The item's key.
<!--/paramDescription1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the item is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
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