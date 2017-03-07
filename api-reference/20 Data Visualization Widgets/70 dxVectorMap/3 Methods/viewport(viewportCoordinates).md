<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the coordinates of the map viewport.
<!--/shortDescription-->

<!--paramName1-->viewportCoordinates<!--/paramName1-->
<!--paramType1-->array<!--/paramType1-->
<!--paramDescription1-->
New coordinates for the map viewport. Pass <i>null</i> to reset the viewport.
<!--/paramDescription1-->

<!--fullDescription-->
To change the coordinates of the map viewport, pass an array of four values in the [*minLongitude*, *maxLatitude*, *maxLongitude*, *minLatitude*] form as the argument to the **viewport(viewportCoordinates)** method. If the passed coordinates do not fit the aspect ratio of the widget container precisely, either the latitude or longitude will be applied depending on the largest range.

In addition, you can get the current coordinates of the map viewport by calling the same method without arguments.

If you have implemented the [onCenterChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onCenterChanged) or [onZoomFactorChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onZoomFactorChanged) callback functions, they will be triggered when the viewport coordinates are changed using the **viewport(viewportCoordinates)** method.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->