The [clearFilter(filterName)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#clearFilterfilterName) method allows you to clear different filter settings depending on the argument. Acceptable arguments are listed in the method's description.

<!---->

---
##### jQuery

    <!--JavaScript-->// Clears the search panel
    $("#treeListContainer").dxTreeList("clearFilter", "search");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        clearSearchPanel () {
            this.treeList.instance.clearFilter("search");
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
- [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/)
