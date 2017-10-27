<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<Object><!--/type-->
===========================================================================

<!--shortDescription-->
Configures map legends.
<!--/shortDescription-->

<!--fullDescription-->
A legend is a supplementary map element that helps end-users identify a map area or a map marker. The **VectorMap** widget can display several legends simultaneously. To configure legends, declare an array of objects and assign it to the **legends** option. Each object in this array specifies settings of one legend. These settings are described in this section.

Each legend requires the [source](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source) option to be set. This option specifies whether it is areas or markers that must be accompanied with a legend. Learn more from the description of the **source** option.

A map legend contains several legend items. A legend item consists of a marker and a text. You can change the size of markers using the [markerSize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#markerSize) option. To provide texts for legend items, you need to implement the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#customizeText) function.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapareawithlabelandtwolegend/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->