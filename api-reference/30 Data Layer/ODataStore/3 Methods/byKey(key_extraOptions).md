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

<!--paramName2-->extraOptions<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
An object specifying additional options.
<!--/paramDescription2-->
<!--paramName2_field1-->expand<!--/paramName2_field1-->
<!--paramType2_field1-->string|Array<string><!--/paramType2_field1-->
<!--paramDescription2_field1-->
An array of the strings that represent the names of the navigation properties to be loaded synchronously with the requested data item (see [Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations)).
<!--/paramDescription2_field1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the item is loaded. It is a [jQuery.Promise](http://api.jquery.com/Types/#Promise) if the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag is enabled and a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) otherwise.
<!--/returnDescription-->

<!--fullDescription-->

<!--/fullDescription-->