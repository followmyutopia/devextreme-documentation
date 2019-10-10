Call the [getNodes()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#getNodes) method to get **TreeView** nodes at any point in the application flow.

---
##### jQuery

    <!--JavaScript-->var allNodes = $("#treeViewContainer").dxTreeView("getNodes");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        nodeCollection: Array<any> = [];
        getNodes () {
            this.nodeCollection = this.treeView.instance.getNodes();
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

All node objects contain a similar set of fields, which are described in the [Node](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Node/Node.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Node/') documentation section.

#####See Also#####
- [TreeView - Search Nodes](/concepts/05%20Widgets/TreeView/15%20Search%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Search_Nodes/')
- [TreeView - Expand and Collapse Nodes](/concepts/05%20Widgets/TreeView/20%20Expand%20and%20Collapse%20Nodes/Expand%20and%20Collapse%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes')
- [TreeView - Select Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes/Select%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Select_Nodes')
- [TreeView Demos](/Demos/WidgetsGallery/#demo/navigation-tree_view-hierarchical_data_structure)
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView/dxTreeView.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/')
