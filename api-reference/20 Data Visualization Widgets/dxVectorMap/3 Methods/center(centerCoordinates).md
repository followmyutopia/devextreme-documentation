<!--id-->dxVectorMap.center(centerCoordinates)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the map center coordinates.
<!--/shortDescription-->

<!--paramName1-->centerCoordinates<!--/paramName1-->
<!--paramType1-->Array<Number><!--/paramType1-->
<!--paramDescription1-->
New map center coordinates. Pass **null** to reset the coordinates.
<!--/paramDescription1-->

<!--fullDescription-->
To change the coordinates of the map center, pass an array of two values in the [*longitude*, *latitude*] form as the argument to the **center(centerCoordinates)** method.

In addition, you can get the current coordinates of the map center by calling the same method without arguments. Moreover, you can perform specific actions when the center coordinates are changed. For this purpose, implement a callback function and assign it to the [onCenterChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onCenterChanged) option.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsvectormapvectormapzoomingandcentering/"
}

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->