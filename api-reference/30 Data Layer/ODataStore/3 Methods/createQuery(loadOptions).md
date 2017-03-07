<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Creates Query object for the OData endpoint. This method is used internally in load() implementation, also can be used by developer for advanced queries.
<!--/d-->
<!--p1d-->optional argument. Can pass: customQueryParams, expand, requireTotalCount<!--/p1d-->
<!--rd-->Query object<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Creates the [Query](/Documentation/ApiReference/Data_Layer/Query/) object for the OData endpoint.
<!--/shortDescription-->

<!--paramName1-->loadOptions<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
The optional query configuration object.
<!--/paramDescription1-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
The desired Query object.
<!--/returnDescription-->

<!--fullDescription-->
This method is used internally by the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/), but you can also use it for advanced queries.

    <!--JavaScript-->
    var query = myStore.createQuery();

For more information on Queries, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept) article. See also the [query(url, queryOptions) utility method](/Documentation/ApiReference/Data_Layer/Utils/#queryurl_queryOptions) description.
<!--/fullDescription-->