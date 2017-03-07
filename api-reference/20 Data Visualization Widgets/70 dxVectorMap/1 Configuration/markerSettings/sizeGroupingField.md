<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep-->..\layers\sizeGroupingField.md<!--/dep-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers** | **sizeGroupingField** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies the field that provides data to be used for sizing [bubble](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type) markers.
<!--/shortDescription-->

<!--fullDescription-->
If you need for the size of a bubble marker to depend on the value of one of its [attributes](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markers/#attributes), assign the name of this attribute to the **sizeGroupingField** option. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified. For this purpose, assign an array to the [sizeGroups](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#sizeGroups) option.

[note]If you need to classify a bubble by its [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Fields/#value), leave the **sizeGroupingField** option unassigned.
<!--/fullDescription-->