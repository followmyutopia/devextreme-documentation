The [clearFilter(filterName)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilterfilterName) method allows you to clear different filter settings depending on the argument. Acceptable arguments are listed in the method's description.

<!---->

---
##### jQuery

    <!--JavaScript-->// Clears the search panel
    $("#dataGridContainer").dxDataGrid("clearFilter", "search");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearSearchPanel () {
            this.dataGrid.instance.clearFilter("search");
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/remoteOperations.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
