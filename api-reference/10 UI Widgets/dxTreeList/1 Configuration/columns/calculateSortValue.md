<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->string | function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Calculates custom values to be used in sorting.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the name of the [data source field]({basewidgetpath}/Configuration/#dataSource) that provides values to be used in sorting...

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

... or a function that returns such a value.

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

<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data of the row to which the cell belongs.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A value to be used in sorting.
<!--/typeFunctionReturnDescription-->

<!--handmade-->
<!--/handmade-->