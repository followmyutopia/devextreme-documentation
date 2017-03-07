The **Map** is an interactive widget that displays a geographic map with markers and routes.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/maps-map-providers_and_types" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The code below adds the **Map** widget to your page. The **Map** is [centered](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/center/) and [zoomed](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#zoom) and supplied with [controls](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#controls) that allow a user to [zoom and navigate](/Documentation/Guide/Widgets/Map/Zoom_and_Center_the_Map/) the **Map** or [change its type](/Documentation/Guide/Widgets/Map/Specify_the_Provider_and_Type/).

    <!--HTML-->
    <div id="mapContainer"></div>
     
<!---->
 
    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            controls: true
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/)
- [Widget Basics - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/)
- [Widget Basics - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Map - Zoom and Center the Map](/Documentation/Guide/Widgets/Map/Zoom_and_Center_the_Map/)
- [Map - Specify the Provider and Type](/Documentation/Guide/Widgets/Map/Specify_the_Provider_and_Type/)
- [Map - Specify the Size](/Documentation/Guide/Widgets/Map/Specify_the_Size/)
- [Map - Configure Markers](/Documentation/Guide/Widgets/Map/Configure_Markers/)
- [Map - Configure Routes](/Documentation/Guide/Widgets/Map/Configure_Routes/)
- [Map API Reference](/Documentation/ApiReference/UI_Widgets/dxMap/)

[tags]map, center, central position, zoom level, controls
