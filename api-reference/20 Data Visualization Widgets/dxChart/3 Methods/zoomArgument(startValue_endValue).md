===================================================================
===================================================================

<!--shortDescription-->
Sets the specified start and end values for the chart's argument axis.
<!--/shortDescription-->

<!--paramName1-->startValue<!--/paramName1-->
<!--paramType1-->Number|Date|string<!--/paramType1-->
<!--paramDescription1-->
A new start value for the argument axis.
<!--/paramDescription1-->

<!--paramName2-->endValue<!--/paramName2-->
<!--paramType2-->Number|Date|string<!--/paramType2-->
<!--paramDescription2-->
A new end value for the argument axis.
<!--/paramDescription2-->

<!--fullDescription-->
This function can be used when implementing [zooming](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Zooming_and_Scrolling/) for your chart. If your chart is integrated with the **RangeSelector** widget, call the **zoomArgument** function when the range selector's selected range is changed. Pass the start and end values of the range selector's selected range as the corresponding parameters of the function.

When the chart's [adjustOnZoom](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#adjustOnZoom) option is set to _true_, the maximum and minimum values of the chart's value axis are changed to correspond to the maximum and minimum values of the chart's series. This is required to remove the empty area in the chart that may appear when changing the maximum and minimum values of the argument axis. To prevent value axis adjustment in response to argument axis boundary changes, set the **adjustOnZoom** option to _false_.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesautoajustment/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->