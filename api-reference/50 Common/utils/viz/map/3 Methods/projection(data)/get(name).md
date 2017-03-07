<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Gets projection
<!--/d-->
<!--p1d-->Projection name<!--/p1d-->
<!--rd-->Projection instance<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the default or custom projection from the projection storage.
<!--/shortDescription-->

<!--paramName1-->name<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The projection name.
<!--/paramDescription1-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
The projection.
<!--/returnDescription-->

<!--fullDescription-->
By default, you can get the following projections by their names.

- *"mercator"* &#8212; [Mercator projection](https://en.wikipedia.org/wiki/Mercator_projection).
- *"equirectangular"* &#8212; [Equirectangular projection](https://en.wikipedia.org/wiki/Equirectangular_projection).
- *"lambert"* &#8212; [Lambert cylindrical projection](https://en.wikipedia.org/wiki/Lambert_cylindrical_equal-area_projection).
- *"miller"* &#8212; [Miller cylindrical projection](https://en.wikipedia.org/wiki/Miller_cylindrical_projection).

You can also [implement your own projection](/Documentation/ApiReference/Common/utils/viz/map/Methods/projection(data/)/) and [add it to the projections storage](/Documentation/ApiReference/Common/utils/viz/map/Methods/projection(data/)/#addname_projection). After that, you can get the added projection using the **get(name)** method.

To apply the projection, assign the returning object to the [projection](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#projection) option of the **VectorMap** widget.
<!--/fullDescription-->