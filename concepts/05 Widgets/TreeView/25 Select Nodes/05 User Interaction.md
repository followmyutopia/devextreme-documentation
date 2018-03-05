If only a single node should be in the selected state at a time, set the [selectByClick](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick) option to **true**. In this case, an end user can select a node simply by clicking it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            // ...
            selectByClick: true
        });
    });

##### Angular

    <!--HTML--><dx-tree-view ...
        [selectByClick]="true">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

If in your scenario, several nodes could be in the selected state at a time, set the [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode) option to *"normal"*. This setting supplies each node with a check box that selects this node. If in addition, a user should be able to select all nodes at once, set the **showCheckBoxesMode** option to *"selectAll"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            // ...
            showCheckBoxesMode: 'normal' // or 'selectAll'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view ...
        showCheckBoxesMode="normal"> <!-- or "selectAll" -->
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })


#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeView/ItemSelectionAndCustomization/jQuery/Light/"
}