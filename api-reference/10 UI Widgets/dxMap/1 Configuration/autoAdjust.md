===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the widget automatically adjusts [center](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#center) and [zoom](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#zoom) option values when adding a new marker or route, or if a new widget contains markers or routes by default.
<!--/shortDescription-->

<!--fullDescription-->
If **autoAdjust** is enabled, **zoom** is set to the maximum value allowing all markers and routes to be displayed at the same time. The **center** is changed so that markers and routes are aligned with the widget's center. Set the **autoAdjust** option to **false** to disable this behavior.

Note that the zoom level can only be automatically decreased to display all markers and routes. If the current zoom level allows all routes and markers to be displayed on the map, it remains unchanged.
<!--/fullDescription-->