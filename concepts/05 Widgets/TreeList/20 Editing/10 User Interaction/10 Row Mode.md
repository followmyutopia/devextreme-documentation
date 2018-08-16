In this mode a user edits data row by row. When a user clicks an *"Edit"* button, the corresponding row enters the editing state, and the *"Save"* and *"Cancel"* buttons appear in the [command column](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Command_Columns/). The widget saves changes only if the *"Save"* button is clicked. If a user starts editing another row, sorts or filters data, it discards the changes.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Row Mode Editing State](/Content/images/doc/18_2/treelist/editing/row_mode_editing_state.png)

Clicking a *"Delete"* button invokes the confirmation dialog that allows a user to cancel row deletion. Use the code below to hide this dialog.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                // ...
                mode: 'row',
                allowDeleting: true,
                texts: {
                    confirmDeleteMessage: null
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing mode="row" [allowDeleting]="true">
            <dxo-texts [confirmDeleteMessage]="null"></dxo-texts>
        </dxo-editing>
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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tree_List/RowEditing/jQuery/Light/"
}
