Use the [selectedRowKeys](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys) option to select rows initially. Note that to access a row by its key, you should specify the **DataGrid**'s [keyExpr](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#keyExpr) or the Store's [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            dataSource: {
                store: {
                    // ...
                    key: "id"
                }
            },
            selectedRowKeys: [1, 5, 18]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid
        [dataSource]="dataGridDataSource"
        [selectedRowKeys]="[1, 5, 18]">
    </dx-data-grid>

    <!--TypeScript-->
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        dataGridDataSource = new DataSource({
            store: {
                // ...
                key: "id"
            }
        });
    }
    
---

The **DataGrid** provides two methods that select rows at runtime: [selectRows(keys, preserve)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectRowskeys_preserve) and [selectRowsByIndexes(indexes)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectRowsByIndexesindexes). They both clear the previous selection by default, although with the **selectRows(keys, preserve)** method you can keep it if you pass **true** as the **preserve** parameter. Before selecting a row, you can call the [isRowSelected(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowSelectedkey) method to check if this row is not already selected.

---
##### jQuery

    <!--JavaScript-->
    var selectSingleRow = function (dataGridInstance, key, preserve) {
        if (!dataGridInstance.isRowSelected(key)) {
            dataGridInstance.selectRows([key], preserve);
        }
    }

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        // ...
        onContentReady: function (e) {
            // Selects the first visible row
            e.component.selectRowsByIndexes([0]);
        }
    }).dxDataGrid("instance");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        selectSingleRow (key, preserve) {
            if (!this.dataGrid.instance.isRowSelected(key)) {
                this.dataGrid.instance.selectRows([key], preserve);
            }
        }
        onContentReadyHandler (e) {
            // Selects the first visible row
            e.component.selectRowsByIndexes([0]);
        }
    }

    <!--HTML-->
    <dx-data-grid ...
        (onContentReady)="onContentReadyHandler($event)">
    </dx-data-grid>
    
---

To select all rows at once, call the [selectAll()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectAll) method.

---

#####jQuery

    <!--JavaScript-->dataGrid.selectAll();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        selectAllRows () {
            this.dataGrid.instance.selectAll();
        }
    }

---

Call the [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys) or [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) method to get the selected row's keys or data.

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    var selectedKeys = dataGrid.getSelectedRowKeys();
    var selectedData = dataGrid.getSelectedRowsData();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        getSelectedRowKeys () {
            return this.dataGrid.instance.getSelectedRowKeys();
        }
        getSelectedRowsData () {
            return this.dataGrid.instance.getSelectedRowsData();
        }
    }
    
---

#####See Also#####
- [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection)
