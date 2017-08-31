<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep--><!--/dep-->
<!--EventForAction-->..\4 Events\areaSelectionChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--deprecated-->
Use the [onSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onSelectionChanged) option instead.
<!--/deprecated-->

<!--shortDescription-->
A handler for the [areaSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#areaSelectionChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the selected/deselected area. An object that represents this area has fields and methods documented in the [Area](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/) class description.

To identify whether an area has been selected or deselected, call its [selected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selected) method. Pass **true** or **false** to this method to select or deselect the area.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The [widget's instance](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->target<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Area object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The selected/deselected area.
<!--/typeFunctionParamDescription1_field3-->
