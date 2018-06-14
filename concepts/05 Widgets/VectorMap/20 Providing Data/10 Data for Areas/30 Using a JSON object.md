If you have your data as a JSON object, assign its [URI](http://en.wikipedia.org/wiki/Uniform_resource_identifier) to the **layers**.**dataSource** option. This way, no other actions will be required.

	<!--JavaScript-->var vectorMapCfg = {
        // ...
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.json'
            // ...
        }, {
            // ...
        }]
    }

The JSON object used as a data source can be in the [GeoJSON](http://en.wikipedia.org/wiki/GeoJSON) format. In such a case, this object should be a [feature collection](http://geojson.org/geojson-spec.html#feature-collection-objects). Note that only the [*Polygon*](http://geojson.org/geojson-spec.html#id4) and [*MultiPolygon*](http://geojson.org/geojson-spec.html#id7) geometries are supported by the **VectorMap** widget. Properties of a GeoJSON object can be accessed using the layer's [attributes(name)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename) method.
