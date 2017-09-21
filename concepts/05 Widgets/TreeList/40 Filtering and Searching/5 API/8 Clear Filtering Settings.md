Use the [clearFilter(filterName)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#clearFilterfilterName) method to clear filtering settings. You can call it with one of the following parameters:

- *"row"*       
Clears the [filter row](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Row).
- *"header"*        
Clears the [header filter](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter).
- *"search"*        
Clears the [search panel](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Search_Panel).
- *"dataSource"*        
Clears the data source filter, whether defined [in the configuration](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) or applied by the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#filterfilterExpr) method.
- *Without any parameter*         
Clears all filters at once.

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