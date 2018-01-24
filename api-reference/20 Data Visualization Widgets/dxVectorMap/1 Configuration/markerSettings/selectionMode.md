<!--dep-->..\layers\selectionMode.md<!--/dep-->
===========================================================================
<!--default-->'single'<!--/default-->
<!--acceptValues-->'multiple' | 'none' | 'single'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers**.**selectionMode** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies whether a single or multiple markers can be selected on a vector map.
<!--/shortDescription-->

<!--fullDescription-->
Several options and methods are connected with the selection operation. To specify whether a single or multiple markers can be selected at a time, use the **selectionMode** option. To determine whether a certain marker is selected when the widget is created, use the **isSelected** field of the object returned by the [customize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#customize) callback function.

At runtime, you can do the following operations.

- Obtain the current selection state of a marker using its [selected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#selected) method.

- Change the current selection state of a marker using its [selected(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#selectedstate) method. Pass **true** or **false** to this method.

- Deselect all the selected markers using the [clearMarkerSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#clearMarkerSelection) method of the map instance.

The change of the selection state invokes the callback function assigned to the [onMarkerSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onMarkerSelectionChanged) option. Within this function you can handle the selection event in the manner you require.
<!--/fullDescription-->