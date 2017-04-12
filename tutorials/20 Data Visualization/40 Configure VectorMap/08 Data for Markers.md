<article data-show-web="/Content/Applications/17_1/DataVisualization/Lessons/ConfigureVectorMap/Step3/vectorMap.html" data-show-first="vectorMap.js">

  Data for markers are provided using an array of objects, each of which must contain the *'coordinates'* field. This field must be an array of two values: the first is the longitude, and the second is the latitude of a map marker. To supply the marker with a label, specify the *'text'* field in the *'attributes'* object of a marker. The current example uses this field to accompany markers with the names of the capitals.

  Create another layer of the *marker* type at this time. Assign the array of markers to its **dataSource** field. If you run the resulting code now, you will see a map indicating the capitals.

#####See Also#####
- To learn about different marker types presented in the **VectorMap** widget, see the [Markers](/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Markers) topic.
- To discover how to provide data for different marker types, refer to the [Data for Markers](/Documentation/Guide/Widgets/VectorMap/Providing_Data/#Data_for_Markers) topic.
  
  The next step will demonstrate how to position your map so that it fits perfectly within widget borders.

</article>