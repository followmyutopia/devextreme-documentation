===================================================================
===================================================================

<!--shortDescription-->
Returns the data item specified by the key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->Object|String|Number<!--/paramType1-->
<!--paramDescription1-->
Specifies the key value of the required items.
<!--/paramDescription1-->

<!--paramName2-->extraOptions<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
An object specifying additional options.
<!--/paramDescription2-->
<!--paramName2_field1-->expand<!--/paramName2_field1-->
<!--paramType2_field1-->String|Array<String><!--/paramType2_field1-->
<!--paramDescription2_field1-->
An array of the strings that represent the names of the navigation properties to be loaded synchronously with the requested data item (see [Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations)).
<!--/paramDescription2_field1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the item is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->

<!--/fullDescription-->