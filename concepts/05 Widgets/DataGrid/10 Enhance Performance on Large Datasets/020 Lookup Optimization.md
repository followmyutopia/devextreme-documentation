As a rule, a [lookup column](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Lookup_Columns/) contains IDs from a [main data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) field but displays human-readable values from [its own data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#dataSource). When the **DataGrid** first launches, it loads data from both data sources which causes performance to decrease.

You can send the human-readable values from the server as a part of the main data source alongside the IDs (like in [this example](https://github.com/DevExpress/devextreme-examples/blob/18_1/datagrid-webapi/datagrid-webapi/Controllers/OrdersController.cs#L23-L43)) to optimize the lookup column. In this case, use the column's [calculateDisplayValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateDisplayValue) option to specify which field provides the human-readable values. With this optimization, the lookup data source is not loaded until a user starts editing the lookup column. 

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            //...
            columns: [{
                caption: "Customer",
                // "CustomerName" provides human-readable values
                calculateDisplayValue: "CustomerName",
                dataField: "CustomerID",
                lookup: {
                    valueExpr: "CustomerID",
                    displayExpr: "ContactName",
                    dataSource: {
                        store: {
                            // ...
                            key: "CustomerID"
                        }
                    }
                }
            },
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxi-column
            caption="Customer"
            dataField="CustomerID"
            calculateDisplayValue="CustomerName">   <!-- "CustomerName" provides human-readable values -->
            <dxo-lookup
                [dataSource]="dataSource"
                displayExpr="ContactName"
                valueExpr="CustomerID">
            </dxo-lookup>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    import 'devextreme/data/array_store';
    // or
    // import 'devextreme/data/odata/store';
    // import 'devextreme/data/custom_store';
    export class AppComponent {
        dataSource: any;
        constructor() {
            this.dataSource = {
                store: {
                    // ...
                    key: "CustomerID"
                }
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
- [DataGrid and Web API Example](https://github.com/DevExpress/devextreme-examples/tree/18_1/datagrid-webapi)
- [Bind a Lookup Column to a Custom Data Source](/Documentation/Guide/Widgets/DataGrid/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/)
