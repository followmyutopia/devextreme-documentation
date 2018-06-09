The [route configuration](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/routes/) provides default route appearance and allows its customization. For example, you can change the color, opacity and thickness of the route line. In addition, you can specify whether a route is [for driving or for walking](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/routes/#mode).

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 15,
            routes: [{
                locations: [
                    [40.782500, -73.966111],
                    [40.755833, -73.986389]
                ],
                color: 'red',
                opacity: 1
            }, {
                locations: [
                    [40.753889, -73.981389],
                    "Brooklyn Bridge,New York,NY"
                ],
                mode: 'walking', // or 'driving'
                weight: 2
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="15"
        [routes]="mapRoutes">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        mapRoutes = [{
            locations: [
                [40.782500, -73.966111],
                [40.755833, -73.986389]
            ],
            color: "red",
            opacity: 1
        }, {
            locations: [
                [40.753889, -73.981389],
                "Brooklyn Bridge,New York,NY"
            ],
            mode: "walking", // or "driving"
            weight: 2
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

---

#####See Also#####
- [Map - Handle Route Related Events](/Documentation/Guide/Widgets/Map/Configure_Routes/Handle_the_Related_Events/)
- [Map - Add and Remove Routes](/Documentation/Guide/Widgets/Map/Configure_Routes/Add_and_Remove/)
- [Map Demos](/Demos/WidgetsGallery/#demo/maps-map-routes)
- [Map API Reference](/Documentation/ApiReference/UI_Widgets/dxMap/)

[tags]map, route, opacity, thickness, weight, color, mode