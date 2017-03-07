By default, a total summary item is placed in the [column that provides data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column) for it. However, you can place the item to another column using the [showInColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn) option. The text [alignment](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#alignment) can also be changed.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        summary: {
            totalItems: [{
                  column: 'OrderNumber',
                  summaryType: 'count',
				  alignment: 'right'
              }, {
                  column: 'SaleAmount',
                  summaryType: 'sum',
				  alignment: 'left',
				  showInColumn: 'OrderDate',
				  // ...
              }]
        }
    });

![Total Summary](/Content/images/doc/16_2/DataGrid/SummaryItemLocation.png)