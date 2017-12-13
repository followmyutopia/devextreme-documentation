===================================================================
===================================================================

<!--shortDescription-->
Sets the value of the map zoom factor.
<!--/shortDescription-->

<!--paramName1-->zoomFactor<!--/paramName1-->
<!--paramType1-->number<!--/paramType1-->
<!--paramDescription1-->
A new value of the zoom factor. Pass **null** to reset the zoom factor.
<!--/paramDescription1-->

<!--fullDescription-->
To change the zoom factor, pass an numeric value as the argument to the **zoomFactor(zoomFactor)** method.

In addition, you can get the current value of the map zoom factor by calling the same method without arguments. Moreover, you can perform specific actions when the zoom factor is changed. For this purpose, implement a callback function and assign it to the [onZoomFactorChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onZoomFactorChanged) option.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->