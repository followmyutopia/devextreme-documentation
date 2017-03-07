<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep-->..\layers\colorGroups.md<!--/dep-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->array<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers** | **colorGroups** option instead.
<!--/deprecated-->

<!--shortDescription-->
Allows you to paint markers with similar attributes in the same color.
<!--/shortDescription-->

<!--fullDescription-->
If you have specified the [field that provides marker-coloring data](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#colorGroupingField), you need to specify groups into which this data must be classified. For this purpose, assign an array of numbers to the [colorGroups](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#colorGroups) option. Each pair of numbers in this array defines a range of data values.

For example, consider that the **colorGroups** array contains four items: [0, 1, 2, 3]. This array specifies three ranges, or groups: 0-1, 1-2 and 2-3. Thus, data values will be split up into three groups. Each group will be assigned a color from the [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#palette) in order to paint the corresponding markers. Markers of those data values that do not match either group will be drawn in a default color.
<!--/fullDescription-->