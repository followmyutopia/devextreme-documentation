<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\centerChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [centerChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#centerChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
If you need to perform specific actions when the coordinates of the map center are changed, handle the **centerChanged** event. One of the ways to do this is to assign a function to the **onCenterChanged** option. This function will be called every time a user moves the map or when the center is being changed in code by calling the [center(centerCoordinates)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#centercenterCoordinates) or [viewport(viewportCoordinates)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates) method. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the updated center coordinates.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.
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
