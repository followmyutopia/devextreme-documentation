A lookup column is a special type of [data columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Data_Columns). It contains a restricted set of values that is useful when filtering and editing.

![DevExtreme HTML5 JavaScript DataGrid LookupColumns](/Content/images/doc/17_2/DataGrid/visual_elements/column-types_lookup.png)

Each lookup column has an individual [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#dataSource) - a collection of objects that map the column's actual values to display values...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: orders,
            columns: [{
                dataField: 'statusId', // provides actual values
                lookup: {
                    dataSource: {
                        store: {
                            type: 'array',
                            data: [
                                { id: 1, name: 'Not Started' },
                                { id: 2, name: 'Need Assistance' },
                                { id: 3, name: 'In Progress' },
                                // ...
                            ],
                            key: "id"
                        },
                        pageSize: 10,
                        paginate: true
                    },
                    valueExpr: 'id', // contains the same values as the "statusId" field provides
                    displayExpr: 'name' // provides display values
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid [dataSource]="orders">
        <dxi-column
            dataField="statusId"> <!-- provides actual values -->
            <dxo-lookup
                [dataSource]="lookupData"
                valueExpr="id" <!-- contains the same values as the "statusId" field provides -->
                displayExpr="name"> <!-- provides display values -->
            </dxo-lookup>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        orders = [ ... ];
        lookupData = {
            store: {
                type: 'array',
                data: [
                    { id: 1, name: 'Not Started' },
                    { id: 2, name: 'Need Assistance' },
                    { id: 3, name: 'In Progress' },
                    // ...
                ],
                key: "id"
            },
            pageSize: 10,
            paginate: true
        };
    }
    
---

... or simply an array of column values if the actual and display values are the same.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid [dataSource]="orders">
        <dxi-column
            dataField="status"> <!-- provides column values -->
            <dxo-lookup
                [dataSource]="lookupData"> <!-- contains the same values as the "status" field provides -->
            </dxo-lookup>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        orders = [ ... ];
        lookupData = [
            'Not Started',
            'Need Assistance',
            'In Progress',
            // ...
        ];
    }
    
---

#####See Also#####
- [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource/jQuery/Light/)

[tags] dataGrid, data grid, column types, lookup columns