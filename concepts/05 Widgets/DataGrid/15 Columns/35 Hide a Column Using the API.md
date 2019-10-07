A column is considered hidden when its [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible) option is **false**. You can change this option programmatically using the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method. For example, the following code hides an *"Email"* column:

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("columnOption", "Email", "visible", false);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        hideEmails() () {
            this.dataGrid.instance.columnOption("Email", "visible", false);
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
- [Column Chooser](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Chooser/)