Use the [selectedRowKeys](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#selectedRowKeys) option to select rows initially. With the non-recursive selection, one key selects one row; with [recursive](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/selection/#recursive) - a row with its nested rows. Note that to access a row by its key, you should specify the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) option in the [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) that underlies the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list
        [dataSource]="treeListDataSource"
        [selectedRowKeys]="[1, 5, 18]">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/array_store';
    // or
    // import 'devextreme/data/odata/store';
    // import 'devextreme/data/custom_store';
    // ...
    export class AppComponent {
        treeListDataSource = new DataSource({
            store: {
                // ...
                key: "id"
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

You can select rows at runtime as well using the [selectRows(keys, preserve)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#selectRowskeys_preserve) method. Note that the **preserve** argument, which tells the widget whether to keep or clear the previous selection, is **false** by default. Before selecting a row, you can call the [isRowSelected(key)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#isRowSelectedkey) method to check if this row is already selected. If you need to select all rows at once, call the [selectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#selectAll) method.

---
##### jQuery

    <!--JavaScript-->var selectSingleRow = function (treeListInstance, key, preserve) {
        if (!treeListInstance.isRowSelected(key)) {
            treeListInstance.selectRows([key], preserve);
        }
    }

<!---->

    <!--JavaScript-->treeList.selectAll();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        selectSingleRow (key, preserve) {
            if (!this.treeList.instance.isRowSelected(key)) {
                this.treeList.instance.selectRows([key], preserve);
            }
        }
        selectAllRows () {
            this.treeList.instance.selectAll();
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

To get the selected rows' keys or data, call the [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowKeys) or [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsData) method, respectively.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    var selectedKeys = treeList.getSelectedRowKeys();
    var selectedData = treeList.getSelectedRowsData();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getSelectedRowKeys () {
            return this.treeList.instance.getSelectedRowKeys();
        }
        getSelectedRowsData () {
            return this.treeList.instance.getSelectedRowsData();
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

With the recursive selection, the **getSelectedRowKeys()** method can return parent row keys only or leaf keys if you call this method with **true** as the argument.


---
##### jQuery

    <!--JavaScript-->
    var treeList = $("#treeListContainer").dxTreeList("instance");
    var selectedLeaves = treeList.getSelectedRowKeys(true);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getSelectedLeaves () {
            return this.treeList.instance.getSelectedRowKeys(true);
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
