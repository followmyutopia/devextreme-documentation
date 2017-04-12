<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Vector_Map/ColorsCustomization/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->elements<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->array<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The array of <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element">layer elements</a>.
<!--/typeFunctionParamDescription1-->
