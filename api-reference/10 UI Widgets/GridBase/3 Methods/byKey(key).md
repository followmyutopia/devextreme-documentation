<!--id-->GridBase.byKey(key)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets a data object with a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->Object|String|Number<!--/paramType1-->
<!--paramDescription1-->
The data object's key.
<!--/paramDescription1-->

<!--returnType-->Promise<Object><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the data object is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The following code shows how to get a data object whose key is 15.

    <!--JavaScript-->
    widgetInstance.byKey(15).done(function(dataObject) {
            // process "dataObject"
        }).fail(function(error) {
            // handle error
        });

#####See Also#####
#include common-link-callmethods
- [instance()]({basewidgetpath}/Methods/#instance)
<!--/fullDescription-->