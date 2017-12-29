The **TreeList** widget supports single and multiple row selection. Use the **selection**.[mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/selection/#mode) option to change the current mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            selection: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-selection
            mode="single"> <!-- "multiple" | "none" -->
        </dxo-selection>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

In the single mode, only one row can be selected at a time. In multiple mode, rows are supplied with check boxes for multiple selection. A check box in the first column's header allows a user to select all rows at once. Clicking this check box selects only those rows that meet the filtering conditions if a filter is applied.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Sorting](/Content/images/doc/17_2/treelist/selection.png)

You can disable the latter feature by setting the **selection**.[allowSelectAll](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/selection/#allowSelectAll) option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            selection: {
                mode: "multiple",
                allowSelectAll: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-selection
            mode="multiple"
            [allowSelectAll]="false">
        </dxo-selection>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

Selection is non-recursive by default, that is, only the clicked row is selected. Assign **true** to the **selection**.[recursive](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/selection/#recursive) option to make selection recursive. After that, a click on a row also selects nested rows, and a click on the column header's check box selects all rows disregarding applied filters.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            selection: {
                mode: "multiple",
                recursive: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-selection
            mode="multiple"
            [recursive]="true">
        </dxo-selection>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

<a href="/Demos/WidgetsGallery/Demo/Tree_List/SingleRowSelection/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Single Selection Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Tree_List/MultipleRowSelection/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Multiple Selection Demo</a>
