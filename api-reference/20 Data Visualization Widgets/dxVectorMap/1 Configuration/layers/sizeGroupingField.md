<!--id-->dxVectorMap.Options.layers.sizeGroupingField<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the field that provides data to be used for sizing [bubble](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#elementType) markers. Setting this option makes sense only if the [layer type](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type) is *"marker"* and the [elementType](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#elementType) is *"bubble"*.
<!--/shortDescription-->

<!--fullDescription-->
If you need the size of the bubble marker to depend on the value of one of its [attributes](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename), assign the name of this attribute to the **sizeGroupingField** option. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified by assigning an array to the [sizeGroups](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#sizeGroups) option.

[note]If you need to classify a bubble by its value, leave the **sizeGroupingField** option unassigned.
<!--/fullDescription-->