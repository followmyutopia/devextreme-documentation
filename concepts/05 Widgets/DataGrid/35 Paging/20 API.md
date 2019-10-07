Call the [pageCount()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageCount) method to get the total page count.

---

#####jQuery

    <!--JavaScript-->
    var totalPageCount = $("#dataGridContainer").dxDataGrid("instance").pageCount();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        getTotalPageCount () {
            this.dataGrid.instance.pageCount();
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

The **DataGrid** also provides the [pageIndex(newIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageIndexnewIndex) and [pageSize(value)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageSizevalue) methods that switch the grid to a specific page and change the page size. They can also be called without arguments, in which case, they return the index and size of the current page.

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("instance").pageSize(8);

<!---->

    <!--JavaScript-->
    var goToLastPage = function (dataGridInstance) {
        dataGridInstance.pageIndex(dataGridInstance.pageCount() - 1);
    }

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        changePageSize () {
            this.dataGrid.instance.pageSize(8);
        }
        goToLastPage () {
            this.dataGrid.instance.pageIndex(this.dataGrid.instance.pageCount() - 1);
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
- [Scrolling](/Documentation/Guide/Widgets/DataGrid/Scrolling/)
