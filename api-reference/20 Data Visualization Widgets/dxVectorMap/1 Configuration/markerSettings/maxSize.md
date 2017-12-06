<!--dep-->..\layers\maxSize.md<!--/dep-->
===========================================================================
<!--default-->50<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers**.**maxSize** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies the pixel-measured diameter of the marker that represents the biggest value. Setting this option makes sense only if you use markers of the *bubble* [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type).
<!--/shortDescription-->

<!--fullDescription-->
When you use bubble markers on your map, their sizes depend on their values. The biggest value will be represented by the largest bubble. Similarly, the smallest value will be represented by the smallest bubble. Bubbles that represent values in between will have sizes proportional to the represented values. To specify the sizes of the largest and smallest bubbles, use the **maxSize** and **minSize** properties of the **markerSettings** object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapbubblemarkers/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->