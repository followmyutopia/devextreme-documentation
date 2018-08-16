The initial and runtime filtering API depends on the UI element and is described in the topics above. This API is designed to filter data the data source returns. If you need to pre-filter data in the data source, call the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#filterfilterExpr) method by passing a [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) as an argument. Note that this filter can only be cleared [programmatically](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Clear_Filtering_Settings).

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("filter", [
        [ "Cost", ">", 1000 ],
        "and",
        [ "Cost", "<=", 2000 ]
    ]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        filterByCost () {
            this.treeList.instance.filter([
                [ "Cost", ">", 1000 ],
                "and",
                [ "Cost", "<=", 2000 ]
            ]);
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

You can create a filter that combines all the applied filters by calling the [getCombinedFilter()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getCombinedFilter) method. It returns a filter with [getters](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) by default. Call it by passing **true** as the argument to get the combined filter with [data fields](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField).

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("getCombinedFilter", true);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getCombinedFilter () {
            return this.treeList.instance.getCombinedFilter(true);
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
- [Filtering API - Clear Filtering Settings](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Clear_Filtering_Settings)