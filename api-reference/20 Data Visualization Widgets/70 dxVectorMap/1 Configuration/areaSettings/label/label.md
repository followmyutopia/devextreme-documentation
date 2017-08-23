<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep-->..\..\layers\label\label.md<!--/dep-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers**.**label** option instead.
<!--/deprecated-->

<!--shortDescription-->
Configures area labels.
<!--/shortDescription-->

<!--fullDescription-->
An area label is a text that accompanies a [map area](/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Areas). Usually, an area label displays the name of a certain geographical object, such as a country, a continent, etc.

Texts for area labels are provided by one of the fields of the **attributes** object. This object must be declared in the map [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#mapData), while the required field must be assigned to the [dataField](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/#dataField) option of the **label** object.

If you have provided data for area labels, enable them on your map by assigning **true** to the [enabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/#enabled) option of the **label** object.

In addition, you can change the appearance of area labels using the **label**.[font](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/font/) object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapareawithlabelandtwolegend/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->