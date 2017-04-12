An area label is a text that accompanies a [map area](/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Areas). Usually, an area label displays the name of a certain geographical object, such as a country, a continent, etc. A label disappears when its area is too small and the text does not fit it. To see the small area labels, zoom in the map.

![Area Labels](/Content/images/doc/17_1/ChartJS/VectorMap_Labels.png)

You can configure area labels using fields of the **layer** | [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/) object.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		layers: [{
			type: 'area',
			label: {
				// area labels settings are specified here
			}
		}]
	};

[Map data](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource) format allows you to set a number of attributes for each map area. Make sure your map data provides an attribute that can be used for labeling. To use the information provided by this attribute in a label, assign the attribute name to the  **layer** | **label** | [dataField](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/#dataField) option. The [predefined data sources](/Documentation/Guide/Widgets/VectorMap/Providing_Data/#VectorMap_Providing_Data_Data_for_Areas_Using_a_Script) already include the *'name'* attribute containing the geographical name of [areas](/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Areas).

If you use a [JSON object](/Documentation/Guide/Widgets/VectorMap/Providing_Data/#Data_for_Areas/Using_a_JSON_object) or a [Binary Source](/Documentation/Guide/Widgets/VectorMap/Providing_Data/#Data_for_Areas/Using_a_Binary_Source) as your [map data](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource), make sure the field you need to use for area labels is recognized by the [attribute(name)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename) method correctly.

To display area labels on a map, set the **layer** | **label** | [enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/#enabled) option to *true*. You can also customize text appearance using the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/font/) object.