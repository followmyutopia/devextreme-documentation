<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep-->..\layers\selectionMode.md<!--/dep-->
===========================================================================
<!--default-->'single'<!--/default-->
<!--acceptValues-->'single' | 'multiple' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--deprecated-->
Use the **layers** | **selectionMode** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies whether single or multiple areas can be selected on a vector map.
<!--/shortDescription-->

<!--fullDescription-->
Several options and methods are connected with the selection operation. To specify whether single or multiple areas can be selected at a time, use the **selectionMode** option. To determine whether a certain area is selected when the widget is created, use the **isSelected** field of the object returned by the [customize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#customize) callback function.

At runtime, you can do the following operations.

- Obtain the current selection state of an area using its [selected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selected) method.

- Change the current selection state of an area using its [selected(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selectedstate) method. Pass **true** or **false** to this method.

- Deselect all the selected areas using the [clearAreaSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#clearAreaSelection) method of the map instance.

The change of the selection state invokes the callback function assigned to the [onAreaSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onAreaSelectionChanged) option. Within this function you can handle the selection event in the manner you require.
<!--/fullDescription-->