To execute certain commands when a node is expanded or collapsed, handle the [itemExpanded](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemExpanded) or [itemCollapsed](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemCollapsed) event. Assign event handling functions to the [onItemExpanded](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemExpanded) or [onItemCollapsed](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemCollapsed) option when you configure the widget if these functions are going to remain unchanged. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            onItemExpanded: function (e) {
                // Handler of the "itemExpanded" event
            },
            onItemCollapsed: function (e) {
                // Handler of the "itemCollapsed" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-view ...
        (onItemExpanded)="onItemExpanded($event)"
        (onItemCollapsed)="onItemCollapsed($event)">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemExpanded (e) {
            // Handler of the "itemExpanded" event
        }
        onItemCollapsed (e) {
            // Handler of the "itemCollapsed" event
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

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var itemCollapsedEventHandler1 = function (e) {
        // First handler of the "itemCollapsed" event
    };

    var itemCollapsedEventHandler2 = function (e) {
        // Second handler of the "itemCollapsed" event
    };

    $("#treeViewContainer").dxTreeView("instance")
        .on("itemCollapsed", itemCollapsedEventHandler1)
        .on("itemCollapsed", itemCollapsedEventHandler2);

#####See Also#####
- [TreeView - Access a Node](/Documentation/Guide/Widgets/TreeView/Access_a_Node)
- [TreeView - Search Nodes](/Documentation/Guide/Widgets/TreeView/Search_Nodes/)
- [TreeView - Select Nodes](/Documentation/Guide/Widgets/TreeView/Select_Nodes)
- [TreeView Demos](/Demos/WidgetsGallery/#demo/navigation-tree_view-hierarchical_data_structure)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)
