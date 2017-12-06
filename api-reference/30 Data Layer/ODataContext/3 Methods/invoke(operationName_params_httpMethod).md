===================================================================
===================================================================

<!--shortDescription-->
Initiates the specified WebGet service operation that returns nothing. For the information on service operations, refer to the [OData documentation](http://www.odata.org/documentation).
<!--/shortDescription-->

<!--paramName1-->operationName<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The name of the operation to invoke.
<!--/paramDescription1-->

<!--paramName2-->params<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
The bag of parameters supported by the operation.
<!--/paramDescription2-->

<!--paramName3-->httpMethod<!--/paramName3-->
<!--paramType3-->object<!--/paramType3-->
<!--paramDescription3-->
Specifies the HTTP method for this operation. The default value is "POST".
<!--/paramDescription3-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation has completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
#####See Also#####
- [Invoking Service Operations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Invoking_Service_Operations)
<!--/fullDescription-->