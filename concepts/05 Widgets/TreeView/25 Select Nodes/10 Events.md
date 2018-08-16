The **TreeView** raises the following selection-related events: 

- [itemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelectionChanged)            
Raised after a node's selection state changes.

- [selectAllValueChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#selectAllValueChanged)          
Raised after the "Select All" check box's state changes.

You can handle these events with functions. Assign the handling functions to the [onItemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged) and [onSelectAllValueChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onSelectAllValueChanged) options when you configure the widget if they are going to remain unchanged at runtime.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            onItemSelectionChanged: function (e) {
                // Handler of the "itemSelectionChanged" event
            },
            onSelectAllValueChanged: function (e) {
                // Handler of the "selectAllValueChanged" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-view ...
        (onItemSelectionChanged)="onItemSelectionChanged($event)"
        (onSelectAllValueChanged)="onSelectAllValueChanged($event)>
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemSelectionChanged (e) {
            // Handler of the "itemSelectionChanged" event
        }
        onSelectAllValueChanged (e) {
            // Handler of the "selectAllValueChanged" event
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
