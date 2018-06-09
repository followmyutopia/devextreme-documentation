The **Map** widget allows you to provide a single icon for all markers. For this purpose, assign the URL of the icon to the [markerIconSrc](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#markerIconSrc) option. In addition, you can customize the icon of an individual marker using the [iconScr](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/#iconSrc) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            zoom: 10,
            markerIconSrc: "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png",
            markers: [
                { location: "40.749825, -73.090443" },
                { location: "42.743244, -71.594375", iconSrc: "http://www.iconsdb.com/icons/preview/gray/map-marker-2-xxl.png" },
                { location: "37.058435, -74.903842" }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [zoom]="10"
        [markerIconSrc]="markerIconUrl"
        [markers]="mapMarkers">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        markerIconUrl: string = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";
        mapMarkers = [
            { location: "40.749825, -73.090443" },
            { location: "42.743244, -71.594375", iconSrc: "http://www.iconsdb.com/icons/preview/gray/map-marker-2-xxl.png" },
            { location: "37.058435, -74.903842" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

---

Apart from the icon, you can specify a [tooltip](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/tooltip/) and [handle the click event](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/#onClick) for an individual marker.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            markers: [{
                location: "Brooklyn Bridge,New York,NY",
                tooltip: {
                    text: "Brooklyn Bridge",
                    isShown: true
                }
            }, { 
                location: "40.058435, -74.903842",
                onClick: function () {
                    DevExpress.ui.notify("The marker is clicked!", "info", 1000);
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        [markers]="mapMarkers">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    import DxNotify from "devextreme/ui/notify"
    // ...
    export class AppComponent {
        mapMarkers = [{
            location: "Brooklyn Bridge,New York,NY",
            tooltip: {
                text: "Brooklyn Bridge",
                isShown: true
            }
        }, { 
            location: "40.058435, -74.903842",
            onClick: () => {
                DxNotify("The marker is clicked!", "info", 1000);
            }
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
- [Map - Handle Marker Related Events](/Documentation/Guide/Widgets/Map/Configure_Markers/Handle_the_Related_Events/)
- [Map - Add and Remove Markers](/Documentation/Guide/Widgets/Map/Configure_Markers/Add_and_Remove/)
- [Map Demos](/Demos/WidgetsGallery/#demo/maps-map-markers)
- [Map API Reference](/Documentation/ApiReference/UI_Widgets/dxMap/)

[tags]map, marker icon, customize marker, tooltip, marker click