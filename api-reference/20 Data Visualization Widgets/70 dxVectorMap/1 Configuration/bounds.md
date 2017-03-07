<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Map bounds (in geographical coordinates space)<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the positioning of a map in geographical coordinates.
<!--/shortDescription-->

<!--fullDescription-->
When you need to display only a specific region on a map, rather than the whole thing, specify the geographical coordinates of this region using the **bounds** option. Assign an array of four values to this option. These values represent geographical coordinates in the following format: *[minLongitude, maxLatitude, maxLongitude, minLatitude]*. See the image below to discover how these values are applied to the map.

![ChartMargin ChartJS](/Content/images/doc/16_1/ChartJS/VectorMapBounds.png)

[note] Specifying the **bounds** option with the { minLon: *minLongitude*, maxLat: *maxLatitude*, maxLon: *maxLongitude*, minLat: *minLatitude* } object is now <font color="red">deprecated</font>.
<!--/fullDescription-->