===================================================================
<!--module-->data/query<!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Creates a [Query](/Documentation/ApiReference/Data_Layer/Query/) instance for accessing a remote service by its URL.
<!--/shortDescription-->

<!--paramName1-->url<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The remote data service's URL.
<!--/paramDescription1-->

<!--paramName2-->queryOptions<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
Additional query options.
<!--/paramDescription2-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The [Query](/Documentation/ApiReference/Data_Layer/Query/) object.
<!--/returnDescription-->

<!--fullDescription-->
The object passed to the **queryOptions** argument should provide the **adapter** method implementing the remote data access logic, in addition to options passed to this method, because the **queryOptions** object is passed to the **adapter** method as well.

If you leave the **adapter** property unspecified, the default adapter implementing the [OData protocol](http://www.odata.org) will be used.

The **queryOptions** object may also provide the **errorHandler** property specifying function [handling errors](/Documentation/Guide/Data_Layer/Data_Layer/#Handling_Errors) that occurred within the [Query](/Documentation/ApiReference/Data_Layer/Query/).

For more information on Queries, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept) article.
<!--/fullDescription-->