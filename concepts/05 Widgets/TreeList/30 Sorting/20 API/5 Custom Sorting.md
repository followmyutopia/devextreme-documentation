Implement a custom sorting routine using the [calculateSortValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateSortValue) option if standard sorting does not meet your requirements. It accepts the name of the [data source field](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource) that provides values to be used in sorting...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: "Position", // provides values for the column
                calculateSortValue: "isOnVacation" // provides values to be used in sorting 
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="Position" <!--provides values for the column -->
            calculateSortValue="isOnVacation"> <!-- provides values to be used in sorting -->
        </dxi-column>
    </dx-tree-list>
    
---

...or a function that returns such a value.

---
##### jQuery

    <!--JavaScript-->$(function() {
        var treeList = $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: 'Position',
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return treeList.option('Position', 'sortOrder') == 'asc' ? 0 : data.length; // CEOs must go first
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dxTreeList("instance");
    });

##### Angular

    <!--JavaScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        customSortingFunction (rowData) {
            if (rowData.Position == "CEO")
                return this.treeList.instance.option('Position', 'sortOrder') == 'asc' ? 0 : data.length; // CEOs must go first
            else
                return rowData.Position; // Others are sorted as usual
        }
    }

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="Position"
            [calculateSortValue]="customSortingFunction">
        </dxi-column>
    </dx-tree-list>
    
---
