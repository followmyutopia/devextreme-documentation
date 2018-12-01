The **Map** widget fires the [routeAdded](/Documentation/ApiReference/UI_Widgets/dxMap/Events/#routeAdded) and [routeRemoved](/Documentation/ApiReference/UI_Widgets/dxMap/Events/#routeRemoved) events when a marker is added or removed.
To handle them, assign functions to the [onRouteAdded](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onRouteAdded) and [onRouteRemoved](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onRouteRemoved) options, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            onRouteAdded: function (e) {
                var addedRoute = e.options;
                // The original route used by the current map provider 
                var originalRoute = e.originalRoute;
                // Event handling commands go here
            },
            onRouteRemoved: function (e) {
                var removedRoute = e.options;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        (onRouteAdded)="routeAdded($event)"
        (onRouteRemoved)="routeRemoved($event)">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        routeAdded (e) {
            let addedRoute = e.options;
            // The original route used by the current map provider 
            let originalRoute = e.originalRoute;
            // Event handling commands go here
        };
        routeRemoved (e) {
            let removedRoute = e.options;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the **markerAdded** and **markerRemoved** events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var routeRemovedHandler1 = function (e) {
        var removedRoute = e.options;
        // First handler of the "routeRemoved" event
    };

    var routeRemovedHandler2 = function (e) {
        var removedRoute = e.options;
        // Second handler of the "routeRemoved" event
    };

    $("#mapContainer").dxMap("instance")
        .on("routeRemoved", routeRemovedHandler1)
        .on("routeRemoved", routeRemovedHandler2);

#####See Also#####
- [Map - Customize Routes](/Documentation/Guide/Widgets/Map/Configure_Routes/Customize/)
- [Map - Add and Remove Routes](/Documentation/Guide/Widgets/Map/Configure_Routes/Add_and_Remove/)
- [Map Demos](/Demos/WidgetsGallery/#demo/maps-map-routes)
- [Map API Reference](/Documentation/ApiReference/UI_Widgets/dxMap/)

[tags]map, route added, Route removed, routeAdded event, routeRemoved event