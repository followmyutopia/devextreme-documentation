To select a map element in code, use its [selected(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#selectedstate) method. Calling the same method without arguments returns the current selection state of the map element.

To call the **selected** method, you need to obtain the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element/Layer%20Element.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') object. If you are calling this method from a click-handling function, it is not an issue, because these objects are passed there as the argument. But in case you need to call it outside this function, call the [getLayers()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#getLayers), [getLayerByName()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#getLayerByIndexindex) or [getLayerByIndex()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#getLayerByIndexindex) method.

	<!--JavaScript-->var areas = mapInstance.getLayerByName('myAreaLayer'); // gets the area layer
	areas[0].selected(true); // selects the area with index 0
	var markers = mapInstance.getLayerByName('myMarkerLayer'); // gets the markers layer
	markers[0].selected(true); // selects the marker with index 0


You can also clear selection settings for all map elements simultaneously using the [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#clearSelection) method.
	
	<!--JavaScript-->mapInstance.clearSelection(); // deselects all areas and markers