<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Indicates whether to adjust axis on chart zoom<!--/d-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not to adjust the value axis when zooming the widget.
<!--/shortDescription-->

<!--fullDescription-->
The **Chart** widget provides a [built-in zooming capability](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode). Technically, zooming is performed down the argument axis, that is, the widget focuses on a smaller range of arguments. At the same time, the visible range of values also changes. In this case, use the **adjustOnZoom** option to decide whether or not to adjust the value axis to the changed visible range of values.

[note]This option is not supported when the argument axis is [discrete](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type).

Besides the built-in zooming, you can zoom the **Chart** widget using the [RangeSelector](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/) widget. For details on this feature, see the [Zooming and Scrolling Using RangeSelector](/Documentation/Guide/Data_Visualization/Charts/End-User_Interaction/#Zooming_and_Scrolling/Using_dxRangeSelector) topic.

#####See Also#####
- [zoomingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) - enables zooming in the chart.
- [zoomArgument(startValue, endValue)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue) - zooms the chart in code.
<!--/fullDescription-->