<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'single' | 'multiple' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a single or multiple nodes can be in the selected state simultaneously.
<!--/shortDescription-->

<!--fullDescription-->
In a *single* mode, only one node can be in the selected state at one moment. When the user selects another node, the formerly selected node becomes unselected. In a *multiple* mode, any number of nodes can be in the selected state.

To implement selection, assign the following or similar callback function to the [onClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onClick) option.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onClick: function (e) {
            e.node.select(!e.node.isSelected());
        }    
    };
    
When entering the selected state, a tile or a group of tiles changes its appearance. You can configure it using the **group**  | [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/group/selectionStyle/) and **tile**.[selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/selectionStyle/) objects.

To control the selection feature in code, use the [isSelected](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isSelected), [select(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#selectstate) and [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Methods/#clearSelection) methods. In addition, you can perform certain actions when a node enters/leaves the selected state. For this purpose, implement the [onSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onSelectionChanged) event handler. 

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SelectionMode` enum. This enum accepts the following values: `None`, `Single` and `Multiple`.
<!--/fullDescription-->