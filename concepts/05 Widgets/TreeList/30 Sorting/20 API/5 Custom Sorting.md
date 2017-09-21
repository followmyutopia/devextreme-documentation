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

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

...or a function that returns such a value.

---
##### jQuery

    <!--JavaScript-->$(function() {
        var treeList = $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: 'Position',
                sortOrder: "asc",
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return treeList.columnOption('Position', 'sortOrder') == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dxTreeList("instance");
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        customSortingFunction (rowData) {
            if (rowData.Position == "CEO")
                return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
            else
                return rowData.Position; // Others are sorted as usual
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="Position"
            sortOrder="asc"
            [calculateSortValue]="customSortingFunction">
        </dxi-column>
    </dx-tree-list>
    
---
