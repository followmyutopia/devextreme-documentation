<!--dep-->..\layers\colorGroupingField.md<!--/dep-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers**.**colorGroupingField** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies the field that provides data to be used for coloring markers.
<!--/shortDescription-->

<!--fullDescription-->
If you need for the color of a specific map marker to depend on the value of one of its [attributes](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markers/#attributes), assign the name of this attribute to the **colorGroupingField** option. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified. For this purpose, assign an array to the [colorGroups](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#colorGroups) option. Each group in this array will be assigned a color from the [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#palette).
<!--/fullDescription-->