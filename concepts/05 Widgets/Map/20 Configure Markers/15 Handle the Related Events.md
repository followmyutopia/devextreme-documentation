The **Map** widget fires the [markerAdded](/Documentation/ApiReference/UI_Widgets/dxMap/Events/#markerAdded) and [markerRemoved](/Documentation/ApiReference/UI_Widgets/dxMap/Events/#markerRemoved) events when a marker is added or removed.
To handle them, assign functions to the [onMarkerAdded](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerAdded) and [onMarkerRemoved](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerRemoved) options, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            onMarkerAdded: function (e) {
                var addedMarker = e.options;
                // The original marker used by the current map provider 
                var originalMarker = e.originalMarker;
                // Event handling commands go here
            },
            onMarkerRemoved: function (e) {
                var removedMarker = e.options;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        (onMarkerAdded)="markerAdded($event)"
        (onMarkerRemoved)="markerRemoved($event)">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        markerAdded (e) {
            let addedMarker = e.options;
            // The original marker used by the current map provider 
            let originalMarker = e.originalMarker;
            // Event handling commands go here
        };
        markerRemoved (e) {
            let removedMarker = e.options;
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
    var markerRemovedHandler1 = function (e) {
        var removedMarker = e.options;
        // First handler of the "markerRemoved" event
    };

    var markerRemovedHandler2 = function (e) {
        var removedMarker = e.options;
        // Second handler of the "markerRemoved" event
    };

    $("#mapContainer").dxMap("instance")
        .on('markerRemoved', markerRemovedHandler1)
        .on('markerRemoved', markerRemovedHandler2);

#####See Also#####
- [Map - Customize Markers](/Documentation/Guide/Widgets/Map/Configure_Markers/Customize/)
- [Map - Add and Remove Markers](/Documentation/Guide/Widgets/Map/Configure_Markers/Add_and_Remove/)
- [Map Demos](/Demos/WidgetsGallery/#demo/maps-map-markers)
- [Map API Reference](/Documentation/ApiReference/UI_Widgets/dxMap/)

[tags]map, marker added, marker removed, markerAdded event, markerRemoved event