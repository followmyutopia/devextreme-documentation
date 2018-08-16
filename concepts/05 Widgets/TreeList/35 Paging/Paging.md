Paging improves the widget's performance on large datasets because it renders rows by pages instead of rendering them at once. To enable paging, set the **paging**.[enabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/paging/#enabled) option to **true**. Use the [pageSize](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/paging/#pageSize) option to change the number of rows per page. You can also specify which page to display by default using the [pageIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/paging/#pageIndex) option.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({  
            // ...
            paging: {
                enabled: true,
                pageSize: 15,
                pageIndex: 1    // Shows the second page
            }
        });
    });


#####Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-paging 
            [enabled]="true"
            [pageSize]="15"
            [pageIndex]="1"> <!-- Shows the second page -->
        </dxo-paging>
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

[tags]TreeList, tree list, paging, pager, page size, page navigator, page info, page count
