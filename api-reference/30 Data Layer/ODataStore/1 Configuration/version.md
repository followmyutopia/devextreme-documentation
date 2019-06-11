<!--id-->ODataStore.Options.version<!--/id-->
===========================================================================
<!--default-->2<!--/default-->
<!--acceptValues-->2 | 3 | 4<!--/acceptValues-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the OData version.
<!--/shortDescription-->

<!--fullDescription-->
If the version is 2, the **ODataContext** uses the "MERGE" method to send requests; otherwise, it uses "PATCH". Set the **method** field of the [beforeSend](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#beforeSend) function's parameter to override this behavior.
<!--/fullDescription-->