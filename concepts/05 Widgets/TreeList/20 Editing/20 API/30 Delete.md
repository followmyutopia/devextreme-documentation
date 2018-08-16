Call the [deleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deleteRowrowIndex) method to delete a specific row from the data source. This method invokes a confirmation dialog that allows a user to cancel deletion. The following code hides this dialog, thus a row is instantly deleted from the data source:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var treeList = $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: "row", 
                allowDeleting: true,
                texts: {
                    // Hides the confirmation dialog
                    confirmDeleteMessage: null
                }
            }
        }).dxTreeList("instance");

        $("#deleteRowButton").dxButton({
            text: "Delete Row",
            onClick: function() {
                // Deletes the second row
                treeList.deleteRow(1);
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list>
        <dxo-editing
            mode="row"
            [allowDeleting]="true">
            <dxo-texts [confirmDeleteMessage]="null"></dxo-texts>
        </dxo-editing>
    </dx-tree-list>
    <dx-button
        text="Delete Row"
        (onClick)="deleteRow()">
    </dx-button>

    <!--TypeScript-->
    import { DxTreeListModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        deleteRow () {
            // Deletes the second row
            this.treeList.instance.deleteRow(1);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxButtonModule
        ],
        // ...
    })
    
---

Note that in the [batch mode](/Documentation/Guide/Widgets/TreeList/Editing/#User_Interaction/Batch_Mode) a row is only marked as deleted. To save changes, call the [saveEditData()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#saveEditData) method. Calling the [undeleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#undeleteRowrowIndex) method cancels row deletion.

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("undeleteRow", 1);

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        undeleteRow () {
            this.treeList.instance.undeleteRow(1);
        }
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
#include common-link-callmethods
