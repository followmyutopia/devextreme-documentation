When a node changes its selected state, the **TreeView** fires the [itemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelectionChanged) event. You can subscribe to it when configuring the widget using the [onItemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged) options, or afterwards using the [on()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#onevents) method. For more details, see the [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events) article.

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

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [TreeView - Access a Node](/Documentation/Guide/Widgets/TreeView/Access_a_Node)
- [TreeView - Filter Nodes](/Documentation/Guide/Widgets/TreeView/Filter_Nodes)
- [TreeView - Expand and Collapse Nodes](/Documentation/Guide/Widgets/TreeView/Select_Nodes)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)