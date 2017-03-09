To add markers at design-time, pass an array of objects to the [markers](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/) option. A marker requires only its [location](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/location/) to be specified.

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            zoom: 5,
            markers: [
                { location: "40.749825, -73.090443" },
                { location: "42.743244, -71.594375" },
                { location: "37.058435, -74.903842" }
            ]
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Markers/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

To add or remove a marker at runtime, call the [addMarker(markerOptions)](/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#addMarkermarkerOptions) or [removeMarker(marker)](/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#removeMarkermarker) method.

    <!--JavaScript-->
    var markersCollection = [
        { location: "40.749825, -73.090443" },
        { location: "42.743244, -71.594375", tooltip: { isShown: true } }
    ];

    // Adds a marker
    map.addMarker(markersCollection[0]);

    // Adds several markers
    map.addMarker(markersCollection);

    // Removes the marker with specific configuration
    map.removeMarker(markersCollection[1]);

    // Removes the marker with index 2 in the "markers" array
    map.removeMarker(2);

    // Removes the markers with specific configurations
    map.removeMarker(markersCollection);

    // Removes the markers with indexes 0 and 4 in the "markers" array
    map.removeMarker([0, 4]);

In the following code, a marker is added each time a user clicks someplace on the **Map**. The last marker from the **markers**  array is removed when the user clicks the [Button](/Documentation/Guide/Widgets/Button/Overview/) under the **Map**.

    <!--JavaScript-->
    $(function() {
        var map = $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            onClick: function (e) {
                e.component.addMarker({
                    // Location of the clicked point on the map
                    location: e.location
                });
            }
        }).dxMap("instance");

        $("#removeMarker").dxButton({
            text: "Remove the Last Marker",
            onClick: function () {
                var markers = map.option("markers");
                var markerCount = markers.length;
                if (markerCount < 1)
                    return;
                // Removes the last marker
                map.removeMarker(markers[markerCount - 1]);
            }
        });
    });

With AngularJS or Knockout, use a different technique. Bind the **markers** option of the **Map** widget to a scope property (in AngularJS) or an observable array (in Knockout). 

**AngularJS**

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.mapMarkers = [
                { location: "40.749825, -73.090443" },
                { location: "42.743244, -71.594375" }
            ];
            $scope.addMarker = function (e) {
                $scope.mapMarkers.push({ location: e.location });
            }
            $scope.removeMarker = function () {
                $scope.mapMarkers.pop();
            };
        });

<!---->

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-map="{
            zoom: 10,
            onClick: addMarker,
            bindingOptions: {
                markers: 'mapMarkers'
            }
        }"></div>
        <div dx-button="{
            text: 'Remove the Last Marker',
            onClick: removeMarker
        }"></div>
    </div>

**Knockout**

    <!--JavaScript-->
    var viewModel = {
        mapMarkers: ko.observableArray([
            { location: "40.749825, -73.090443" },
            { location: "42.743244, -71.594375" }
        ]),
        addMarker: function (e) {
            viewModel.mapMarkers.push({ location: e.location });
        },
        removeMarker: function () {
            viewModel.mapMarkers.pop();
        }
    };

    ko.applyBindings(viewModel);

<!---->

    <!--HTML-->
    <div data-bind="dxMap: { 
        zoom: 10,
        onClick: addMarker,
        markers: mapMarkers 
    }"></div>
    <div data-bind="dxButton: {
        text: 'Remove the Last Marker',
        onClick: removeMarker
    }"></div>

#####See Also#####
- [Map - Customize Markers](/Documentation/Guide/Widgets/Map/Configure_Markers/Customize/)
- [Map - Handle Marker Related Events](/Documentation/Guide/Widgets/Map/Configure_Markers/Handle_the_Related_Events/)
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/maps-map-markers)
- [Map API Reference](/Documentation/ApiReference/UI_Widgets/dxMap/)

[tags]map, markers, location, add marker, remove marker, add on click