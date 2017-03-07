<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Allows to customize layer elements after they are created<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(elements)<!--/type-->
<!--fp1d-->The elements for customization (with `applySettings` and `selected` methods)<!--/fp1d-->
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
<!--/fullDescription-->
<!--typeFunctionParamName1-->elements<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->array<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The array of <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element">layer elements</a>.
<!--/typeFunctionParamDescription1-->
