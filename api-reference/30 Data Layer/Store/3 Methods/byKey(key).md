<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
A Promise that is resolved after the item is loaded. It is a [jQuery.Promise](http://api.jquery.com/Types/#Promise) if the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag is enabled and a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) otherwise.
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