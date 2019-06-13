<!--id-->Query.min(getter)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Calculates the minumum of all values found using a [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters).
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A getter; in most cases, the name of the field that provides values for the calculation.
<!--/paramDescription1-->

<!--returnType-->Promise<Number, Date><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
#include datalayer-ref-query-gettersummarymethods-desc with {
    summary: "min"
}
<!--/fullDescription-->