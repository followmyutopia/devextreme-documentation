<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Creates a Query object for remote URL. Data access logic is defined by queryOptions.adapter. By default OData protocol is used.
<!--/d-->
<!--p1d-->URL of remote data service<!--/p1d-->
<!--p2d-->Additional query options<!--/p2d-->
<!--rd-->Query object<!--/rd-->
===================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_query">data/query</a><!--/module-->
===================================================================

<!--shortDescription-->
Creates a [Query](/Documentation/ApiReference/Data_Layer/Query/) instance for accessing the remote service specified by a URL.
<!--/shortDescription-->

<!--paramName1-->url<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
Specifies the URL of the remote data service.
<!--/paramDescription1-->

<!--paramName2-->queryOptions<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
Specifies additional query options.
<!--/paramDescription2-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
The created Query instance.
<!--/returnDescription-->

<!--fullDescription-->
The object passed to the **queryOptions** argument should provide the **adapter** method implementing the remote data access logic, in addition to options passed to this method, because the **queryOptions** object is passed to the **adapter** method as well.

If you leave the **adapter** property unspecified, the default adapter implementing the [OData protocol](http://www.odata.org) will be used.

The **queryOptions** object may also provide the **errorHandler** property specifying function [handling errors](/Documentation/Guide/Data_Layer/Data_Layer/#Handling_Errors) that occurred within the [Query](/Documentation/ApiReference/Data_Layer/Query/).

For more information on Queries, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept) article.
<!--/fullDescription-->