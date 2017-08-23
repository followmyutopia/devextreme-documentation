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
Use the **layers**.**colorGroups** option instead.
<!--/deprecated-->

<!--shortDescription-->
Allows you to paint areas with similar attributes in the same color.
<!--/shortDescription-->

<!--fullDescription-->
If you have specified the [field that provides area-coloring data](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#colorGroupingField), you need to specify groups into which this data must be classified. For this purpose, assign an array of numbers to the [colorGroups](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#colorGroups) option. Each pair of numbers in this array defines a range of data values.

For example, imagine that the **colorGroups** array contains four items: [0, 1, 2, 3]. This array specifies three ranges, or groups: 0-1, 1-2 and 2-3. Thus, data values will be split up into three groups. Each group will be assigned a color from the [palette](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#palette) in order to paint the corresponding areas. Areas of those data values that do not match neither group will be drawn in a default color.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormappalette/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->