When a node is expanded or collapsed, the **TreeView** fires the [itemExpanded](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemExpanded) or [itemCollapsed](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemCollapsed) event. You can subscribe to them when configuring the widget using the [onItemExpanded](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemExpanded) or [onItemCollapsed](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemCollapsed) options, or afterwards using the [on()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#onevents) method. See the [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events) article for more details.

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            // ...
            // Subscribing to the events when configuring the widget
            onItemExpanded: function (e) { ... },
            onItemCollapsed: function (e) { ... }
        });

        // Subscribing to the events after the widget is configured
        $("#treeViewContainer").dxTreeView("instance").on({
            "itemExpanded": function (e) { ... },
            "itemCollapsed": function (e) { ... }
        });
    });

#####See Also#####
- [TreeView - Access a Node](/Documentation/Guide/Widgets/TreeView/Access_a_Node)
- [TreeView - Search Nodes](/Documentation/Guide/Widgets/TreeView/Search_Nodes/)
- [TreeView - Select Nodes](/Documentation/Guide/Widgets/TreeView/Select_Nodes)
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tree_view-hierarchical_data_structure)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)
