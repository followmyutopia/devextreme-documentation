===================================================================
<!--module-->viz/vector_map/projection<!--/module-->
<!--export-->projection<!--/export-->
===================================================================

<!--shortDescription-->
Creates a new projection.
<!--/shortDescription-->

<!--paramName1-->data<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object specifying the conversion functions.
<!--/paramDescription1-->
<!--paramName1_field1-->to<!--/paramName1_field1-->
<!--paramType1_field1-->function(coordinates)<!--/paramType1_field1-->
<!--paramDescription1_field1-->
The function that converts coordinates from a data space to [-1, 1] * [-1, 1] space.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->from<!--/paramName1_field2-->
<!--paramType1_field2-->function(coordinates)<!--/paramType1_field2-->
<!--paramDescription1_field2-->
The function that converts coordinates from the [-1, 1] * [-1, 1] space to the data space.
<!--/paramDescription1_field2-->
<!--paramName1_field3-->aspectRatio<!--/paramName1_field3-->
<!--paramType1_field3-->number<!--/paramType1_field3-->
<!--paramDescription1_field3-->
The projection's aspect ratio.
<!--/paramDescription1_field3-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The projection.
<!--/returnDescription-->

<!--fullDescription-->
After creating the custom projection, you can [add it to the projections storage](/Documentation/ApiReference/Common/Utils/viz/map/Methods/#addname_projection) or assign the returning object to the [projection](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#projection) option of the  widget.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/maps-vector_map-custom_projection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->