A lookup column is a special case of [data columns](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/#Data_Columns). A lookup column contains a restricted set of values. It is useful for filtering and, often, editing.

![DevExtreme HTML5 JavaScript TreeList LookupColumns](/Content/images/doc/17_2/treelist/visual_elements/column-types_lookup.png)

Each lookup column has an individual [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/#dataSource) - a collection of objects that map the column's actual values to display values...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: orders,
            columns: [{
                dataField: 'statusId', // provides actual values
                lookup: {
                    dataSource: [
                        { id: 1, name: 'Not Started' },
                        { id: 2, name: 'Need Assistance' },
                        { id: 3, name: 'In Progress' },
                        // ...
                    ],
                    valueExpr: 'id', // contains the same values as the "statusId" field provides
                    displayExpr: 'name' // provides display values
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list [dataSource]="orders">
        <dxi-column
            dataField="statusId"> <!-- provides actual values -->
            <dxo-lookup
                [dataSource]="lookupData"
                valueExpr="id" <!-- contains the same values as the "statusId" field provides -->
                displayExpr="name"> <!-- provides display values -->
            </dxo-lookup>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        orders = [ ... ];
        lookupData = [
            { id: 1, name: 'Not Started' },
            { id: 2, name: 'Need Assistance' },
            { id: 3, name: 'In Progress' },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

... or simply an array of column values if actual and display values are the same.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: orders,
            columns: [{
                dataField: 'status', // provides column values
                lookup: {
                    dataSource: [ // contains the same values as the "status" field provides
                        'Not Started',
                        'Need Assistance',
                        'In Progress',
                        // ...
                    ]
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list [dataSource]="orders">
        <dxi-column
            dataField="status"> <!-- provides column values -->
            <dxo-lookup
                [dataSource]="lookupData"> <!-- contains the same values as the "status" field provides -->
            </dxo-lookup>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        orders = [ ... ];
        lookupData = [
            'Not Started',
            'Need Assistance',
            'In Progress',
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

#####See Also#####
- [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/)
- [TreeList Demos](/Demos/WidgetsGallery/Demo/Tree_List/UsingFilterRow/jQuery/Light/)

[tags] treelist, tree list, column types, lookup columns