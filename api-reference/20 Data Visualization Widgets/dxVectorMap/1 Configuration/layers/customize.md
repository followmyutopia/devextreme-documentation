---
id: dxVectorMap.Options.layers.customize
type: function(elements)
---
---
##### shortDescription
Specifies the function that customizes each layer element individually.

##### param(elements): Array<MapLayerElement>
The array of [layer elements](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element).

##### notUsedInTheme

---
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

#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/ColorsCustomization/jQuery/Light/"
}