The default size of the **Map** widget is 300x300 pixels. To change it, use to the [width](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#width) and [height](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#height) options.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            width: '100%',
            height: 500
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        width="100%"
        [height]="500">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

---

If you prefer specifying the widget size using CSS, set the **width** and **height** options to **null**. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            width: null,
            height: null
        });
    });

    <!--CSS-->
    #mapContainer {
        width: 100%;
        height: 500px;
    }

##### Angular

    <!--HTML-->
    <dx-map id="mapContainer"
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        [width]="null"
        [height]="null">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

    <!--CSS-->
    #mapContainer {
        width: 100%;
        height: 500px;
    }

---

#####See Also#####
- [Map - Zoom and Center the Map](/Documentation/Guide/Widgets/Map/Zoom_and_Center_the_Map/)
- [Map - Specify the Provider and Type](/Documentation/Guide/Widgets/Map/Specify_the_Provider_and_Type/)
- [Map Demos](/Demos/WidgetsGallery/#demo/maps-map-providers_and_types)
- [Map API Reference](/Documentation/ApiReference/UI_Widgets/dxMap/)

[tags]map, size, height, width, css