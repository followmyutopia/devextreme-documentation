To select or cancel the selection of a node programmatically, call the [selectItem(itemElement)](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement) or [unselectItem(itemElement)](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement) method passing the key of the node as a parameter.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("selectItem", nodeKey);
    // $("#treeViewContainer").dxTreeView("unselectItem", nodeKey);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        selectNode (key) {
            this.treeView.instance.selectItem(key);
        }
        unselectNode (key) {
            this.treeView.instance.unselectItem(key);
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

To select or cancel the selection of all nodes programmatically, call the [selectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll) or [unselectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll) method.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("selectAll");
    // $("#treeViewContainer").dxTreeView("unselectAll");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        selectAllNodes () {
            this.treeView.instance.selectAll();
        }
        unselectAllNodes () {
            this.treeView.instance.unselectAll();
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

[note]If the [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode) is *"none"*, nodes selected using the API do not differ from unselected nodes in appearance.