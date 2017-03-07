<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Occurs when area selection state is changed (argument - Proxy object for the marker)<!--/d-->
<!--dep-->Use the 'onSelecitonChanged' option instead<!--/dep-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->EVENT<!--/type-->
<!--fp1d-->Event argument<!--/fp1d-->
<!--fp1_field1d-->Widget itself.<!--/fp1_field1d-->
<!--fp1_field2d-->Widget container.<!--/fp1_field2d-->
<!--fp1_field3d-->The marker that was selected or unselected.<!--/fp1_field3d-->
===========================================================================

<!--deprecated-->
Use the [selectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#selectionChanged) event instead.
<!--/deprecated-->

<!--shortDescription-->
Fires when a user selects/deselects a marker.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the selected/deselected marker. An object that represents this marker has fields and methods documented in the [Marker](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/) class description.

To identify whether a marker has been selected or deselected, call its [selected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#selected) method. Pass *true* or *false* to this method to select or deselect the marker.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events)
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
<!--typeFunctionParamName1_field3-->target<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Marker object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The selected/deselected area.
<!--/typeFunctionParamDescription1_field3-->
