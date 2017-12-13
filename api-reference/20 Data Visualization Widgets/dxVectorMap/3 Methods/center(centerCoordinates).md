===================================================================
===================================================================

<!--shortDescription-->
Sets the coordinates of the map center.
<!--/shortDescription-->

<!--paramName1-->centerCoordinates<!--/paramName1-->
<!--paramType1-->Array<number><!--/paramType1-->
<!--paramDescription1-->
New coordinates for the map center. Pass **null** to reset the coordinates.
<!--/paramDescription1-->

<!--fullDescription-->
To change the coordinates of the map center, pass an array of two values in the [*longitude*, *latitude*] form as the argument to the **center(centerCoordinates)** method.

In addition, you can get the current coordinates of the map center by calling the same method without arguments. Moreover, you can perform specific actions when the center coordinates are changed. For this purpose, implement a callback function and assign it to the [onCenterChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onCenterChanged) option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapzoomingandcentering/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->