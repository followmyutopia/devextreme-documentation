===========================================================================
<!--type-->function(key)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom implementation of the [remove(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey) method.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->key<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object|String|Number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The key of the item to be removed.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<void><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after the item is removed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->