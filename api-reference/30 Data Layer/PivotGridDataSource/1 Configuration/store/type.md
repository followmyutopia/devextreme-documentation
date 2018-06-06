===========================================================================
<!--acceptValues-->'array' | 'local' | 'odata' | 'xmla'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the **PivotGridDataSource**'s storage type.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following values:

- "array"  
 Creates an [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/).

- "local"  
 Creates a [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/).

- "odata"  
 Creates an [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

- "xmla"  
 Creates an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).

Each store has options that are detailed in the links above. Declare these options in the **store** object.

You can also implement custom data access logic as described in the [Use CustomStore](/Documentation/Guide/Widgets/PivotGrid/Use_CustomStore/) topic.
<!--/fullDescription-->