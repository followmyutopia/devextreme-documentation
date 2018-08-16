With the **TreeList** widget, a user can sort by single and multiple columns. Use the **sorting**.[mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/sorting/#mode) option to specify the current sorting mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            sorting: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-sorting
            mode="single"> <!-- or "multiple" | "none" -->
        </dxo-sorting>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
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

In the single mode, a user selects a sort order from the context menu or clicks a column header to apply sorting. Subsequent clicks on the same header reverse the sort order. Applying sorting to another column clears the previous column's sorting settings. In the multiple mode, sorting settings applied to other columns remain intact when a user selects a sort order from another column's context menu. Note that rows are sorted within their hierarchical level.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Sorting](/Content/images/doc/18_2/treelist/visual_elements/sorting_sorted_columns.png)

The context menu can also be used to clear a column's sorting settings.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Sorting](/Content/images/doc/18_2/treelist/visual_elements/sorting_context_menu.png)

To disable sorting in the whole widget, set the **sorting**.**mode** option to *"none"*; to disable sorting only in a specific column, use its [allowSorting](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowSorting) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                // ...
                allowSorting: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column [allowSorting]="false"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
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

#####See Also#####
- [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/)