A lookup column is a special type of [data columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Data_Columns). It contains a restricted set of values that is useful when filtering and editing.

![DevExtreme HTML5 JavaScript DataGrid LookupColumns](/Content/images/doc/19_2/DataGrid/visual_elements/column-types_lookup.png)

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
    import { DxDataGridModule } from "devextreme-angular";
    import "devextreme/data/array_store";
    // ...
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
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
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
    import { DxDataGridModule } from "devextreme-angular";
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
            DxDataGridModule
        ],
        // ...
    })
    
---

If your data source accepts **null** values, set the [allowClearing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#allowClearing) option to **true**. In editing state, each of the lookup column's cells will have a button that nullifies the value.

Each cell in the lookup column is based on the [SelectBox](/Documentation/Guide/Widgets/SelectBox/Overview/) widget. Use [editorOptions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions) to customize it. See the [Customize Editors](/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors) topic for more details.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CascadingLookups/jQuery/Light/"
}

#####See Also#####
- [Bind a Lookup Column to a Custom Data Source](/Documentation/Guide/Widgets/DataGrid/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/)
- [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/)

[tags] dataGrid, data grid, column types, lookup columns
