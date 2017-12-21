===================================================================
===================================================================

<!--shortDescription-->
Creates a **Query** object for the OData endpoint.
<!--/shortDescription-->

<!--paramName1-->loadOptions<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The **Query** configuration.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The [Query](/Documentation/ApiReference/Data_Layer/Query/) object.
<!--/returnDescription-->

<!--fullDescription-->
This method is used internally by the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/), but you can also use it for advanced queries.

    <!--JavaScript-->
    var query = myStore.createQuery();

For more information on Queries, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept) article. See also the [query(url, queryOptions) utility method](/Documentation/ApiReference/Data_Layer/Utils/#queryurl_queryOptions) description.
<!--/fullDescription-->