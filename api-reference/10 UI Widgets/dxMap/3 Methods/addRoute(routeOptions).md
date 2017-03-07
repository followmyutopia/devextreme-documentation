<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Adds route to the map.
<!--/d-->
<!--p1d-->Route or routes array.<!--/p1d-->
<!--rd-->A Promise of jQuery Deferred object which is resolved with origin route instance when the route is added.<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Adds a route to the map.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->object|array<!--/paramType1-->
<!--paramDescription1-->
A route object and an array of route objects.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery Deferred object which is resolved with an original route instance when the route is added.
<!--/returnDescription-->

<!--fullDescription-->
The route object should include the **locations** field, containing an array of route locations.
Each location can be specified in any of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - 'Brooklyn Bridge,New York,NY'
<!--/fullDescription-->