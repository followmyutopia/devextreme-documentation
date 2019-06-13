<!--id-->viz.map.projection.get(name)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the default or custom projection from the projection storage.
<!--/shortDescription-->

<!--paramName1-->name<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The projection's name.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The projection.
<!--/returnDescription-->

<!--fullDescription-->
By default, you can get the following projections by their names.

- *"mercator"* &#8212; <a href="https://en.wikipedia.org/wiki/Mercator_projection" target="_blank">Mercator projection</a>.
- *"equirectangular"* &#8212; <a href="https://en.wikipedia.org/wiki/Equirectangular_projection" target="_blank">Equirectangular projection</a>.
- *"lambert"* &#8212; <a href="https://en.wikipedia.org/wiki/Lambert_cylindrical_equal-area_projection" target="_blank">Lambert cylindrical projection</a>.
- *"miller"* &#8212; <a href="https://en.wikipedia.org/wiki/Miller_cylindrical_projection" target="_blank">Miller cylindrical projection</a>.

You can also [implement your own projection](/Documentation/ApiReference/Common/utils/viz/map/Methods/projection(data)/) and [add it to the projections storage](/Documentation/ApiReference/Common/utils/viz/map/Methods/projection(data)/#addname_projection). After that, you can get the added projection using the **get(name)** method.

To apply the projection, assign the returning object to the [projection](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#projection) option of the  widget.
<!--/fullDescription-->