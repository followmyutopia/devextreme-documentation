When a node's selected state is changed, the **TreeView** fires the [itemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelectionChanged) event. You can subscribe to it when configuring the widget using the [onItemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged) options, or afterwards using the [on()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#onevents) method. See the [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events) article for more information.

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            // ...
            // Subscribing to the event when configuring the widget
            onItemSelectionChanged: function (e) { ... }
        });

        // Subscribing to the event after the widget is configured
        $("#treeViewContainer").dxTreeView("instance").on({
            "itemSelectionChanged": function (e) { ... }
        });
    });

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/jQuery/Light/"
}

#####See Also#####
- [TreeView - Access a Node](/Documentation/Guide/Widgets/TreeView/Access_a_Node)
- [TreeView - Search Nodes](/Documentation/Guide/Widgets/TreeView/Search_Nodes/)
- [TreeView - Expand and Collapse Nodes](/Documentation/Guide/Widgets/TreeView/Select_Nodes)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)
