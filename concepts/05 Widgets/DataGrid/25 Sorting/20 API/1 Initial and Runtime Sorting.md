Rows are sorted according to the data source by default. Set the [sortOrder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortOrder) option to sort rows in the required order. Specify the [sortIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortIndex) option as well to sort by multiple columns. Otherwise, each sorted column gets a sort index according to its position in the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. For example, the following code sorts rows first by the *"Country"*, then by the *"City"* column:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                { dataField: "City",    sortIndex: 1, sortOrder: "asc" },
                { dataField: "Country", sortIndex: 0, sortOrder: "asc" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="City"    [sortIndex]="1" sortOrder="asc"></dxi-column>
        <dxi-column dataField="Country" [sortIndex]="0" sortOrder="asc"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

Change the **sortOrder** and **sortIndex** options using the [columnOption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method to sort at runtime.

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.columnOption("Country", {
        sortOrder: "desc",
        sortIndex: 2
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        sortByCountries () {
            this.dataGrid.instance.columnOption("Country", {
                sortOrder: "desc",
                sortIndex: 2
            });
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
