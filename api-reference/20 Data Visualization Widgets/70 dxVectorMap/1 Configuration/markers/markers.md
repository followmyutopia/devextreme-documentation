<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Map data source for markers<!--/d-->
<!--dep-->Use the 'layers.data' option instead<!--/dep-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->array | string<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers** | [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource) option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies a data source for the map markers.
<!--/shortDescription-->

<!--fullDescription-->
Data you need to provide for map markers depends on the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type) of the markers you use. Generally, you need to declare an array of objects, each of which must hold the **coordinates** field specifying geographical coordinates of a marker. Additionally, you need to specify the **value** field (for *bubble* markers), or the **values** field (for *pie* markers), or the **url** field (for *image* markers). To display a label for a marker, specify the **text** field.

For a more comprehensive description of how to provide data for map markers, see the [Data for Markers](/Documentation/Guide/Data_Visualization/VectorMap/Providing_Data/#Data_for_Markers) topic.
<!--/fullDescription-->