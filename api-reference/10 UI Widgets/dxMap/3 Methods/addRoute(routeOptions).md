<!--id-->dxMap.addRoute(routeOptions)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Adds a route to the map.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->Object|Array<Object><!--/paramType1-->
<!--paramDescription1-->
The [Route](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/routes/) object(s).
<!--/paramDescription1-->

<!--returnType-->Promise<Object><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved with an original route instance when the route is added. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The route object should include the **locations** field, containing an array of route locations.
Each location can be specified in any of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - "Brooklyn Bridge,New York,NY"

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->