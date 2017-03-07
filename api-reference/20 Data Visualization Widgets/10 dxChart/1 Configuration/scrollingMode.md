<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'touch' | 'mouse' | 'all'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Enables scrolling in your chart.
<!--/shortDescription-->

<!--fullDescription-->
This option allows you to control the scrolling capability in your chart. By default, this capability is off. To make scrolling available on touch-enabled devices only, assign *'touch'* to the **scrollingMode** option. In that case, a user will be able to scroll the chart using the flick gesture. If your chart is not supposed to be viewed on touch-enabled devices, but you still need scrolling to be enabled, assign *'mouse'* to the **scrollingMode** option. In that case, a user will be able to scroll the chart by dragging. To enable scrolling for all devices, assign *'all'* to the **scrollingMode** option.

Scrolling may also be performed using the scroll bar. To make it visible assign *true* to the **visible** option of the [scrollBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/) object.

[note]In many cases, scrolling is useless without zooming, and vice versa. Hence, when enabling the scrolling capability in your chart, consider [enabling the zooming capability](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) as well.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `ChartPointerType` enum. This enum accepts the following values: `Mouse`, `Touch`, `All` and `None`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [zoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart) - an event that fires when scrolling or zooming begins.
- [zoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomEnd) - an event that fires when scrolling or zooming ends.
<!--/fullDescription-->