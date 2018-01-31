===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(elements)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the function that customizes each layer element individually.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a function for this option, use the fields of the [Layer Element](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/) object. To access this object, use the function's parameter or the **this** object.

Only the following options can be changed in the **customize** function.

- [borderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#borderColor)
- [borderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#borderWidth)
- [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#color)
- [hoveredBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderColor)
- [hoveredBorderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderWidth)
- [hoveredColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredColor)
- [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/) (but not **enabled**)
- [opacity](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#opacity)
- [selectedBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderColor)
- [selectedBorderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderWidth)
- [selectedColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedColor)
- [size](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#size)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/ColorsCustomization/jQuery/Light/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->elements<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<MapLayerElement><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The array of [layer elements](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element).
<!--/typeFunctionParamDescription1-->
