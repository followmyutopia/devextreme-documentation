<!--id-->dxChart.Options.zoomAndPan<!--/id-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures zooming and panning.
<!--/shortDescription-->

<!--fullDescription-->
You can enable zooming and panning for the argument and value axes independently. Set the [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#argumentAxis) and [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#valueAxis) options to enable zooming, panning, or both for a specific axis.

Users can use the mouse and touch gestures to zoom and pan. The following table illustrates user interaction:

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Device</th>
      <th>Zooming Gestures</th>
      <th>Panning Gestures</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Touch-enabled</td>
      <td>Spread and pinch</td>
      <td>Vertical or horizontal drag</td>
    </tr>
    <tr>
      <td>Mouse-equipped</td>
      <td>Mouse Wheel</td>
      <td>Vertical or horizontal drag</td>
    </tr>
    </tbody>
  </table>
</div>

You can use the [allowTouchGestures](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#allowTouchGestures) or [allowMouseWheel](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#allowMouseWheel) option to disable touch or mouse support.

Users can also use the mouse to zoom the chart by selecting an area with the drag gesture. Refer the [dragToZoom](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#dragToZoom) option for more information.

Zooming and panning are related to the visual/whole range concept. Refer to the [Visual and Whole Ranges](/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/) article for more information.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ZoomingOnAreaSelection/jQuery/Light/"
}

#####See Also#####
- [Zooming and Panning](/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/)
- [onZoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart) | [onZoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd)
- **argumentAxis**.[visualRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/) | **valueAxis**.[visualRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange/)
<!--/fullDescription-->