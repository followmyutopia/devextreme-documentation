<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to display [bubbles](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#elementType) with similar attributes in the same size. Setting this option makes sense only if the [layer type](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type) is *"marker"* and the [elementType](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#elementType) is *"bubble"*.
<!--/shortDescription-->

<!--fullDescription-->
If you have specified the [field that provides marker-sizing data](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#sizeGroupingField), you need to specify groups into which this data must be classified. For this purpose, assign an array of numbers to the [sizeGroups](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#sizeGroups) option. Each pair of numbers in this array defines a range of data values.

For example, consider that the **sizeGroups** array contains four items: [0, 1, 2, 3]. This array specifies three ranges, or groups: 0-1, 1-2 and 2-3. Thus, data values will be split up into three groups. Each group will be assigned a size correlating with the group values. This size will be calculated automatically taking into account the [minSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#minSize) and [maxSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#maxSize) values. Markers of those data values that do not match neither group will have a default size.
<!--/fullDescription-->