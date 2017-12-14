<!--EventForAction-->..\4 Events\zoomFactorChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [zoomFactorChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#zoomFactorChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
If you need to perform specific actions when the map zoom factor is changed, handle the **zoomFactorChanged** event. One of the ways to do this is to assign a function to the **onZoomFactorChanged** option. This function will be called every time a user zooms the map or when the zoom factor is changed from code by calling the [zoomFactor(zoomFactor)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#zoomFactorzoomFactor) or [viewport(viewportCoordinates)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#viewportviewportCoordinates) method. When implementing this function, use the object passed to it as the parameter. Among the fields of this object, you can find the updated zoom factor.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->zoomFactor<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The updated zoom factor.
<!--/typeFunctionParamDescription1_field4-->
