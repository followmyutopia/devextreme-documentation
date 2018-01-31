===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the crosshair feature.
<!--/shortDescription-->

<!--fullDescription-->
Crosshair is a pointer represented by two mutually-crossing lines stretched over the entire chart plot. The crosshair helps a user identify the values of the series points precisely. When enabled, the crosshair follows the cursor and snaps to the nearest series point.

![DevExtreme HTML5 Charts Crosshair](/Content/images/doc/18_1/ChartJS/visual_elements/crosshair.png)

To enable the crosshair, set the **crosshair**.**enabled** option to **true**. Assign **true** to the **crosshair**.**label**.**visible** option as well to make the crosshair labels visible.

Settings specified in the **crosshair** object apply to both the crosshair lines. If you specify the same settings within the [horizontalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/) or [verticalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/) object, they will apply to the particular crosshair line only. Note that individual settings override common ones.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturescrosshair/"
}
<!--/fullDescription-->