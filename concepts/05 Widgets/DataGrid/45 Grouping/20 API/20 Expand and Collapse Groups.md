The **DataGrid** provides the following API for expanding and collapsing groups:

- **All groups**    
    You can expand and collapse all groups at once by calling the [expandAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) and [collapseAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex) methods without arguments. Groups appear already expanded, a behavior you can change by setting the **grouping**.[autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option to **false**.
    
    ---

    #####jQuery 

        <!--JavaScript-->
        $(function () {
            var dataGrid = $("#dataGridContainer").dxDataGrid({
                // ...
                grouping: { 
                    autoExpandAll: false
                }
            }).dxDataGrid("instance");
            function expandAll () {
                dataGrid.expandAll();
            }
            function collapseAll () {
                dataGrid.collapseAll();
            }
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping 
                [autoExpandAll]="false">
            </dxo-grouping>
        </dx-data-grid>

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            collapseAll () {
                this.dataGrid.instance.collapseAll();
            }
            expandAll () {
                this.dataGrid.instance.expandAll();
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

- **Groups of a specific level**    
    The same **expandAll(groupIndex)** and **collapseAll(groupIndex)** methods expand and collapse groups of a specific level if you pass a non-negative integer as the **groupIndex** parameter to them. It is the same **groupIndex** that a column gets when it participates in grouping. The column's [autoExpandGroup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#autoExpandGroup) option specifies the initial state of groups of this level.

    ---

    #####jQuery

        <!--JavaScript-->
        $(function () {
            var dataGrid = $("#dataGridContainer").dxDataGrid({
                // ...
                columns: [
                    { dataField: 'firstName', groupIndex: 0 },
                    { dataField: 'lastName', groupIndex: 1, autoExpandGroup: false },
                    // ...
                ]
            }).dxDataGrid("instance");
            function expandDataGroupedByLastName () {
                dataGrid.expandAll(1);
            }
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxi-column 
                dataField="firstName"
                [groupIndex]="0">
            </dxi-column>
            <dxi-column 
                dataField="lastName"
                [groupIndex]="1"
                [autoExpandGroup]="false">
            </dxi-column>
        </dx-data-grid>

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            expandDataGroupedByLastName () {
                this.dataGrid.instance.expandAll(1);
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

- **Individual groups**     
    The [expandRow(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandRowkey) and [collapseRow(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseRowkey) methods expand and collapse an individual group. You can check the group's current state using the [isRowExpanded(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowExpandedkey)  method.

    ---

    #####jQuery

        <!--JavaScript-->
        function toggleGroup (groupKey) {
            var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
            if (dataGrid.isRowExpanded(groupKey)) {
                dataGrid.collapseRow(groupKey);
            } else {
                dataGrid.expandRow(groupKey);
            }
        }

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            toggleGroup (groupKey) {
                if (this.dataGrid.instance.isRowExpanded(groupKey)) {
                    this.dataGrid.instance.collapseRow(groupKey);
                } else {
                    this.dataGrid.instance.expandRow(groupKey);
                }
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
- [Group Index and Key](/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Group_Index_and_Key)
- [User Interaction - Expand and Collapse Groups](/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups)
