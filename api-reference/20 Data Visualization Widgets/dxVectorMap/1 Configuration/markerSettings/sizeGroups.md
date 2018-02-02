<!--dep-->..\layers\sizeGroups.md<!--/dep-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<Number><!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to display [bubbles](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type) with similar attributes in the same size.
<!--/shortDescription-->

<!--fullDescription-->
If you have specified the [field that provides marker-sizing data](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#sizeGroupingField), you need to specify groups into which this data must be classified. For this purpose, assign an array of numbers to the [sizeGroups](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#sizeGroups) option. Each pair of numbers in this array defines a range of data values.

For example, consider that the **sizeGroups** array contains four items: [0, 1, 2, 3]. This array specifies three ranges, or groups: 0-1, 1-2 and 2-3. Thus, data values will be split up into three groups. Each group will be assigned a size correlating with the group values. This size will be calculated automatically taking into account the [minSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#minSize) and [maxSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#maxSize) values. Markers of those data values that does not match neither group will have a default size.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsvectormapvectormapbubblemarkers/"
}
<!--/fullDescription-->