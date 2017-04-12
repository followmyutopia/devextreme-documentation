As a rule, a lookup column contains IDs from a field of the [main data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), but displays human-readable values from [its own data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#dataSource). At first launch, the **DataGrid** loads data from both data sources, and thus performance decreases.

To optimize the lookup column, you can send the human-readable values from the server as a part of the main data source alongside the IDs (like in [this example](https://github.com/DevExpress/devextreme-examples/blob/17_1/datagrid-webapi/datagrid-webapi/Controllers/OrdersController.cs#L23-L43)). In this case, use the [calculateDisplayValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateDisplayValue) option of the column to specify which field provides the human-readable values. With this optimization, the lookup data source will not be loaded until a user starts editing the lookup column. 

    <!--JavaScript-->
    $(function () {
        $("#gridContainer").dxDataGrid({
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

#####See Also#####
- [DataGrid and Web API Example](https://github.com/DevExpress/devextreme-examples/tree/17_1/datagrid-webapi)
