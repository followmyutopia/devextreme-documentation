===================================================================
===================================================================

<!--shortDescription-->
Sets the map viewport coordinates.
<!--/shortDescription-->

<!--paramName1-->viewportCoordinates<!--/paramName1-->
<!--paramType1-->Array<Number><!--/paramType1-->
<!--paramDescription1-->
New viewport coordinates. Pass **null** to reset the viewport.
<!--/paramDescription1-->

<!--fullDescription-->
To change the coordinates of the map viewport, pass an array of four values in the [*minLongitude*, *maxLatitude*, *maxLongitude*, *minLatitude*] form as the argument to the **viewport(viewportCoordinates)** method. If the passed coordinates do not fit the aspect ratio of the widget container precisely, either the latitude or longitude will be applied depending on the largest range.

In addition, you can get the current coordinates of the map viewport by calling the same method without arguments.

If you have implemented the [onCenterChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onCenterChanged) or [onZoomFactorChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onZoomFactorChanged) callback functions, they will be triggered when the viewport coordinates are changed using the **viewport(viewportCoordinates)** method.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/"
}

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->