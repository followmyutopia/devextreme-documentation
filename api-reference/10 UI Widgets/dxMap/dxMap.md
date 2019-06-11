<!--id-->dxMap<!--/id-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/map<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Map** is an interactive widget that displays a geographic map with markers and routes.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#map").dxMap({
            provider: "bing",
            type: "roadmap",
            zoom: 10,
            center: "40.749825, -73.987963"
        });
    });

    <!--HTML-->
    <div id="map"></div>

##### Angular

    <!--HTML-->
    <dx-map
        provider="bing"
        type="roadmap"
        [zoom]="10"
        center="40.749825, -73.987963">
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

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-map="{
        provider: 'bing',
        type: 'roadmap',
        zoom: 10,
        center: '40.749825, -73.987963'
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxMap: {
        provider: 'bing',
        type: 'roadmap',
        zoom: 10,
        center: '40.749825, -73.987963'
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Map()
        .ID("map")
        .Provider(GeoMapProvider.Bing)
        .Type(GeoMapType.Roadmap)
        .Zoom(10)
        .Center(40.749825, -73.987963)
    )

    <!--Razor VB-->@(Html.DevExtreme().Map() _
        .ID("map") _
        .Provider(GeoMapProvider.Bing) _
        .Type(GeoMapType.Roadmap) _
        .Zoom(10) _
        .Center(40.749825, -73.987963)
    )

---

 

#####See Also#####
- [Map - Overview](/Documentation/Guide/Widgets/Map/Overview/)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsmapmapmap/"
}
<!--/fullDescription-->