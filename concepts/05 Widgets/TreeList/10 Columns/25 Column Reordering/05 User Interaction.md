Set the [allowColumnReordering](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#allowColumnReordering) option to **true** to allow a user to reorder columns. 
If a specific column should not be moved, set its [allowReordering](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowReordering) option to **false**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            allowColumnReordering: true,
            columns: [
                { dataField: "CompanyName", allowReordering: false },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [allowColumnReordering]="true">
        <dxi-column dataField="CompanyName" [allowReordering]="false"></dxi-column>
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

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/Reordering/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
