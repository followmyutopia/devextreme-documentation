You can clear sorting settings for all columns by calling the [clearSorting()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearSorting) method, or for a specific column - by setting its [sortIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortIndex) option to **undefined** using the [columnOption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method.

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.columnOption("Name", "sortIndex", undefined);
    dataGrid.clearSorting();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearSortingByNames () {
            this.dataGrid.instance.columnOption("Name", "sortIndex", undefined);
        }
        clearAllSorting () {
            this.dataGrid.instance.clearSorting();
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
- [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/)
