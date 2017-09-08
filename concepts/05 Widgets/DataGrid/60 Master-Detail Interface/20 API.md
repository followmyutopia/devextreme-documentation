Pass *-1* to the [expandAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) or [collapseAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex) method to expand or collapse all master rows at once. 

---
#####jQuery

    <!--JavaScript-->
    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.expandAll(-1);
    dataGrid.collapseAll(-1);

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        expandAllMasterRows () {
            this.dataGrid.instance.expandAll(-1);
        }
        collapseAllMasterRows () {
            this.dataGrid.instance.collapseAll(-1);
        }
    }

---

The [expandRow(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandRowkey) and [collapseRow(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseRowkey) methods expand and collapse an individual master row. You can check a row's current state by calling the [isRowExpanded(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowExpandedkey) method.

---

#####jQuery

    <!--JavaScript-->
    function toggleMasterRow (rowKey) {
        var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
        if (dataGrid.isRowExpanded(rowKey)) {
            dataGrid.collapseRow(rowKey);
        } else {
            dataGrid.expandRow(rowKey);
        }
    }

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        toggleMasterRow (rowKey) {
            if (this.dataGrid.instance.isRowExpanded(rowKey)) {
                this.dataGrid.instance.collapseRow(rowKey);
            } else {
                this.dataGrid.instance.expandRow(rowKey);
            }
        }
    }

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailAPI/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>