<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep-->..\layers\customize.md<!--/dep-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(marker)<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers** | **customize** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies the function that customizes each marker individually.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a function for this option, use the fields of the [Marker](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/) object. To access this object, use the function's parameter or the **this** object.

The **customize** function should return the object that contains options to be changed for a certain area. These options are listed below.

- [borderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#borderColor)
- [borderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#borderWidth)
- [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#color)
- [hoveredBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#hoveredBorderColor)
- [hoveredBorderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#hoveredBorderWidth)
- [hoveredColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#hoveredColor)
- [selectedBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#selectedBorderColor)
- [selectedBorderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#selectedBorderWidth)
- [selectedColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#selectedColor)
- **isSelected**	
Specifies if a marker is selected when the map is created. To select a marker at runtime, use the [selected(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#selectedstate) method.
- **text**	
Specifies the text that accompanies a marker.
<!--/fullDescription-->
<!--typeFunctionParamName1-->marker<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Marker object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The marker to be customized.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Marker configuration<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A configuration object for the marker.
<!--/typeFunctionReturnDescription-->