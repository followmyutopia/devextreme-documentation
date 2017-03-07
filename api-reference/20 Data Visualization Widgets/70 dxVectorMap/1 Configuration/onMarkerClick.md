<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Occurs on click (argument - Proxy object for the clicked marker)<!--/d-->
<!--dep-->Use the 'onClick' option instead<!--/dep-->
<!--EventForAction-->..\4 Events\markerClick.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function | string<!--/type-->
<!--fp1d-->Event argument<!--/fp1d-->
<!--fp1_field1d-->Widget itself.<!--/fp1_field1d-->
<!--fp1_field2d-->Widget container.<!--/fp1_field2d-->
<!--fp1_field3d-->An extended jQuery event.<!--/fp1_field3d-->
<!--fp1_field4d-->The clicked marker.<!--/fp1_field4d-->
===========================================================================

<!--deprecated-->
Use the [onClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onClick) option instead.
<!--/deprecated-->

<!--shortDescription-->
A handler for the [markerClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#markerClick) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked marker. An object that represents this marker has fields and methods documented in the [Marker](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/) class description.

Alternatively, you can navigate to a specific URL when the **markerClick** event fires. For this purpose, assign this URL to the **onMarkerClick** option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapzoomingandcentering/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->jQueryEvent<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->jQuery-event object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The jQuery event.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->target<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Marker object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The clicked marker.
<!--/typeFunctionParamDescription1_field4-->
