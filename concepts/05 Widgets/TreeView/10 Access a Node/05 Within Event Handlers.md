Usually, you need to access a **TreeView** node when an action was made on it, for example, when it was clicked or selected. This action raises an event, and you can access the node subjected to the action within the event handler. 

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: data,
            onItemClick: function (e) {
                var node = e.node;
                // ...
            }
        });
    });

Not every event handler provides access to the node, only those whose name starts with **onItem...**. They are described in the [TreeView Configuration](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/).