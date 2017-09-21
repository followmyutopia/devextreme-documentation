Call the [deselectRows(keys)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectRowskeys) method to clear the selection of specific rows.

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("deselectRows", [1, 4, 10]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deselectRows (keys) {
            this.dataGrid.instance.deselectRows(keys);
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

Call the [clearSelection()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearSelection) method to clear selection of all rows. If you apply a [filter](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/) and want to keep the selection of invisible rows that do not meet the filtering conditions, use the [deselectAll()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectAll) method. Also call this method to clear selection depending on the [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode).

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.deselectAll();
    dataGrid.clearSelection();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deselectVisibleRows () {
            this.dataGrid.instance.deselectAll();
        }
        deselectAllRows () {
            this.dataGrid.instance.clearSelection();
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
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
