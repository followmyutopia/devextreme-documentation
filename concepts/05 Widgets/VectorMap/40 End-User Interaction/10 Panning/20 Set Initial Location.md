By default, any map is centered on a (0, 0) geographical point. To center the map on a different point, specify the [center](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#center) option that accepts an array of two values representing the longitude and the latitude of a point.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		center: [-87.627778, 41.881944] // centers the map on Chicago
	};

If you need to restrict the view area to specific coordinates, set the [bounds](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#bounds) option. This option accepts an array of geographical coordinates in the following format: *[minLongitude, maxLatitude, maxLongitude, minLatitude]*.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		bounds: [-135, 60, -65, 20] // displays the USA by default
	};