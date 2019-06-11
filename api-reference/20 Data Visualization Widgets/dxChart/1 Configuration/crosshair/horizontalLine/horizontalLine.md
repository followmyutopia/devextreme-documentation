<!--id-->dxChart.Options.crosshair.horizontalLine<!--/id-->
===========================================================================
<!--type-->Object | Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the horizontal crosshair line individually.
<!--/shortDescription-->

<!--fullDescription-->
Crosshair lines can be configured using the following objects.

* **crosshair**.**horizontalLine**       
Configures the horizontal crosshair line only.

* **crosshair**.[verticalLine](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/)     
Configures the vertical crosshair line only.

* **crosshair**    
Configures both the crosshair lines.

Options declared in the **horizontalLine** and **verticalLine** objects override the options declared in the **crosshair** object.

[note]Instead of an object, you can assign a Boolean value to the **horizontalLine** field. This value will control the visibility of the horizontal crosshair line.
<!--/fullDescription-->