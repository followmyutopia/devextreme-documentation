===========================================================================
<!--default-->'single'<!--/default-->
<!--acceptValues-->'multiple' | 'none' | 'single'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether single or multiple map elements can be selected on a vector map.
<!--/shortDescription-->

<!--fullDescription-->
Several options and methods are connected with the selection operation. To specify whether single or multiple areas can be selected at a time, use the **selectionMode** option. To determine whether a certain area is selected when the widget is created, use the **isSelected** field of the object returned by the [customize](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize) callback function.

At runtime, you can do the following operations.

- Obtain the current selection state of a layer element using its [selected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#selected) method.

- Change the current selection state of a layer element using its [selected(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#selectedstate) method. Pass **true** or **false** to this method.

- Deselect all the selected layer elements using the [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer/Methods/#clearSelection) method of the map layer.

The change of the selection state invokes the callback function assigned to the [onSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onSelectionChanged) option. Within this function, you can handle the selection event in the manner you require.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SelectionMode` enum. This enum accepts the following values: `None`, `Single` and `Multiple`.
<!--/fullDescription-->