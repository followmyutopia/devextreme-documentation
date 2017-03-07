To select or cancel the selection of a node programmatically, call the [selectItem(itemElement)](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement) or [unselectItem(itemElement)](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement) method passing the key of the node as a parameter.

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("selectItem", nodeKey);
    // $("#treeViewContainer").dxTreeView("unselectItem", nodeKey);

To select or cancel the selection of all nodes programmatically, call the [selectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll) or [unselectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll) method.

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("selectAll");
    // $("#treeViewContainer").dxTreeView("unselectAll");

[note]If the [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode) is *"none"*, nodes selected using the API do not differ from unselected nodes in appearance.