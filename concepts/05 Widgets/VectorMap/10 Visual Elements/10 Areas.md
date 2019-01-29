An area is the fundamental element of the **VectorMap** widget. Map areas usually represent geographical objects, such as countries, continents, etc.

![DevExtreme ChartJS VectorMap](/Content/images/doc/19_1/ChartJS/MapAreas.png)

#####See Also#####
- [Vector Map - Data for Areas](/Documentation/Guide/Widgets/VectorMap/Providing_Data#Data_for_Areas)

You can configure map areas using fields of the [layer](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/) object, whose [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type) is *'area'*.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		layers: [{
			type: 'area',
			// area settings are specified here
		},
			// ...
		]
	};

The following list provides a brief overview of area features that can be configured using this object.

* **Color**		
You can specify colors for areas using the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#color) option and for their borders using the [borderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#borderColor) option. In addition, you can use a palette to colorize your map. Using a palette requires several options to be specified. To get a step-by-step guide on applying a palette to your map, refer to the [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#palette) option description.

* **Appearance in the Hovered State**		
When a user hovers the mouse pointer over an area, this area enters the [hovered state](/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Hovering). You can specify a color for an area in this state using the [hoveredColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredColor) option. Additionally, you can change the appearance of the area border using the [hoveredBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderColor) and [hoveredBorderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderWidth) options.

* **Appearance in the Selected State**		
If you have implemented the [selection](/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Selection) capability in your map, customize the appearance of areas in the selected state. Similarly to the appearance of areas in the hovered state, you can specify a color for areas in the selected state using the [selectedColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedColor) option, and a color and a width for the area border using the [selectedBorderColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderColor) and [selectedBorderWidth](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderWidth) options.

Specified directly in the **layer** object, these options are applied to all map elements. To set them for specific areas, determine these options in the object returned by the [customize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize) function. When implementing this function, use an **elements** array to get all [layer elements](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/). This object is passed to the **customize** function as the argument.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		layers: [{
			type: 'area',
			customize: function (elements) {
                for (i in elements) {
                    if (elements[i].attribute('name') == 'France')
                        elements[i].applySettings({ color: 'blue' });  // paints the 'France' area in blue
                }
			}
		}]
	};