<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures groups.
<!--/shortDescription-->

<!--fullDescription-->
A group is an element that collects several [tiles](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/) in it. In terms of data, it is a node that has children in the current context. Groups appear only if the [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource) implies a hierarchical structure.

The following list provides an overview of group features that you can configure using the **group** object.

* **Labels**      
Each group is identified by a label. Its appearance can be changed using the fields of the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/label/) object. If the group's width is too small, the label will be hidden.
* **Headers' Height**      
Group headers contain labels. To specify the height of the group headers, use the [headerHeight](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/#headerHeight) option.
* **Color**     
There are several approaches to colorizing the group headers. Refer to the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/#color) option description to find information about all of them.
* **Hover and Selection Styles**        
A group can be in the [hover](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#hoverEnabled) or [selected](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#selectionMode) state. In these states, its style changes to the one specified by the [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/hoverStyle/) or [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/selectionStyle/) object respectively. A group can also enter the hover or selected state when a nested tile enters it. To enable this feature, assign **true** to the [interactWithGroup](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#interactWithGroup) option of the root configuration object.
* **Border's Appearance**     
Specify the fields of the [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/border/) object to configure group borders.

An object assigned to the **group** field configures all groups in the widget. To customize a specific group, pass a similar object to the [customize(options)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#customizeoptions) method of the node represented by the group.
<!--/fullDescription-->