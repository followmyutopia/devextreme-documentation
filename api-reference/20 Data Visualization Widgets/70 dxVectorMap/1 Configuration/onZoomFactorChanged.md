<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Raised when zoom factor is changed<!--/d-->
<!--EventForAction-->..\4 Events\zoomFactorChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function<!--/type-->
<!--fp1d-->Event argument<!--/fp1d-->
<!--fp1_field1d-->Widget itself.<!--/fp1_field1d-->
<!--fp1_field2d-->Widget container.<!--/fp1_field2d-->
<!--fp1_field3d-->The updated zoom factor.<!--/fp1_field3d-->
===========================================================================

<!--shortDescription-->
A handler for the [zoomFactorChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#zoomFactorChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
If you need to perform specific actions when the map zoom factor is changed, handle the **zoomFactorChanged** event. One of the ways to do this is to assign a function to the **onZoomFactorChanged** option. This function will be called every time a user zooms the map or when the zoom factor is changed from code by calling the [zoomFactor(zoomFactor)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#zoomFactorzoomFactor) or [viewport(viewportCoordinates)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates) method. When implementing this function, use the object passed to it as the parameter. Among the fields of this object, you can find the updated zoom factor.

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
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->zoomFactor<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->number<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The updated zoom factor.
<!--/typeFunctionParamDescription1_field3-->
