<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when the coordinates of the map center are changed.
<!--/shortDescription-->

<!--fullDescription-->
If you need to perform specific actions when the coordinates of the map center are changed, implement a function that handles the **centerChanged** event. This function will be called every time a user moves the map or when the center is being changed in code by calling the [center(centerCoordinates)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#centercenterCoordinates) or [viewport(viewportCoordinates)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates) method. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the updated center coordinates.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
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
<!--typeFunctionParamName1_field3-->center<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->array<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The updated geographical coordinates of the center.
<!--/typeFunctionParamDescription1_field3-->
