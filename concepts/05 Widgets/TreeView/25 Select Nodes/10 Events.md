To execute certain commands when a node's selected state is changed, handle the [itemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelectionChanged) event. Assign an event handling function to the [onItemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged) option when you configure the widget if this function is going to remain unchanged.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            onItemSelectionChanged: function (e) {
                // Handler of the "itemSelectionChanged" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-view ...
        (onItemSelectionChanged)="onItemSelectionChanged($event)">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onItemSelectionChanged (e) {
            // Handler of the "itemSelectionChanged" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })
    
---

If you are going to change the event handler at runtime, or if you need to attach several handlers to the event, subscribe to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var itemSelectionChangedHandler1 = function (e) {
        // First handler of the "itemSelectionChanged" event
    };

    var itemSelectionChangedHandler2 = function (e) {
        // Second handler of the "itemSelectionChanged" event
    };

    $("#treeViewContainer").dxTreeView("instance")
        .on("itemSelectionChanged", itemSelectionChangedHandler1)
        .on("itemSelectionChanged", itemSelectionChangedHandler2);

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/jQuery/Light/"
}

#####See Also#####
- [TreeView - Access a Node](/Documentation/Guide/Widgets/TreeView/Access_a_Node)
- [TreeView - Search Nodes](/Documentation/Guide/Widgets/TreeView/Search_Nodes/)
- [TreeView - Expand and Collapse Nodes](/Documentation/Guide/Widgets/TreeView/Select_Nodes)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)
