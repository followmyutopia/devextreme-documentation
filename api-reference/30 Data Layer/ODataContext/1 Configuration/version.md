===========================================================================
<!--default-->2<!--/default-->
<!--acceptValues-->2 | 3 | 4<!--/acceptValues-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the version of the OData protocol used to interact with the data service.
<!--/shortDescription-->

<!--fullDescription-->
[note]If the version option holds 2, ODataContext uses the "MERGE" method to send requests. Otherwise, it uses the "PATCH" method. To override this behavior, use the [beforeSend](/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#beforeSend) option.
<!--/fullDescription-->