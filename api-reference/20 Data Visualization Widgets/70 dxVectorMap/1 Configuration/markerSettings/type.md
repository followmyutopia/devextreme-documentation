<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Marker type<!--/d-->
<!--dep-->..\layers\elementType.md<!--/dep-->
===========================================================================
<!--default-->'dot'<!--/default-->
<!--acceptValues-->'dot' | 'bubble' | 'pie' | 'image'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers** | **elementType** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies the type of markers to be used on the map.
<!--/shortDescription-->

<!--fullDescription-->
**VectorMap** supports markers of the following types.

* **dot**	
Markers are represented by dots bordered with a white line.
* **bubble**	
Markers are represented by bubbles of different sizes. The size of a bubble depends on the value of the **value** field specified in the object of the [markers](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markers/) array.
* **pie**		
Markers are represented by pie charts. To specify values for pie slices, assign an array to the **values** field specified in the object of the **markers** array.
* **image**		
Markers are represented by custom images. To specify an image for a marker, assign a URL of this image to the **url** field specified in the object of the **markers** array.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapimagemarkers/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->