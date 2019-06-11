<!--id-->DataSource.Options.store.type<!--/id-->
===========================================================================
<!--acceptValues-->'array' | 'local' | 'odata'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the storage type the **DataSource** uses.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following values:

- "array"  
 Creates an [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/).

- "local"  
 Creates a [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/).

- "odata"  
 Creates an [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

Each store has options that are detailed in the links above. Declare these options in the **store** object.

You can implement custom data access logic as described in the [Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) topic if these stores are not suitable.
<!--/fullDescription-->