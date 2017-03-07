Hover-related marker settings reside in its [layer](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/) configuration object. Map markers have all the same hovering options that [map areas](/Documentation/Guide/Data_Visualization/VectorMap/End-User_Interaction/#Hovering/Area_Hover) have: [hoverEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoverEnabled) switches the hovering on/off, [hoveredColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredColor) and [hoveredBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderColor) specify the color of markers and their borders.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			type: 'marker',
			// ...
			hoverEnabled: true, // enables hovering (as hovering is enabled by default, may not be set)
			hoveredColor: 'blue', // paints markers blue in the hovered state
			hoveredBorderColor: 'red' // paints marker borders red in the hovered state
		}]
	};

Being set directly in the marker **layer**, the color-specifying options are applied to all map markers at once. To set these options for a specific marker, specify them within the object returned by the [customize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize) function. When implementing this function, use a [Marker](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/) object to identify the marker. This object is accessible using the function's argument as well as using the **this** object.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			type: 'marker',
			// ...
			hoveredColor: 'blue', // paints markers blue in the hovered state
			customize: function (elements) {
				$.each(elements, function (i, element) {
					if (element.attribute('text') == 'Memphis') {
						element.applySettings({ hoveredColor: 'green' }); // paints 'Memphis' green in the hovered state
					}
				});
			}
		}]
	};