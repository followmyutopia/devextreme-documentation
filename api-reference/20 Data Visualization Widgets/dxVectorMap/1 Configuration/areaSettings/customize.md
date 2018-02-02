<!--dep-->..\layers\customize.md<!--/dep-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(area)<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers**.**customize** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies the function that customizes each area individually.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a function for this option, use the fields of the [Area](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/) object. To access this object, use the function's parameter or the **this** object.

The **customize** function should return the object that contains options to be changed for a certain area. These options are listed below.

- [borderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#borderColor)
- [borderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#borderWidth)
- [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#color)
- [hoveredBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#hoveredBorderColor)
- [hoveredBorderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#hoveredBorderWidth)
- [hoveredColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#hoveredColor)
- [selectedBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#selectedBorderColor)
- [selectedBorderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#selectedBorderWidth)
- [selectedColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#selectedColor)
- **isSelected**    
Specifies whether or not an area is selected when the map is created. To select an area at runtime, use the [selected(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selectedstate) method.
- **paletteIndex**    
Specifies the index of the color when using [palettes](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#palette). This option is ignored when the **color** field is specified.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->area<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->areaObjects<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The area to be customized.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->dxVectorMap_Options_areaSettings<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A configuration object for the area.
<!--/typeFunctionReturnDescription-->