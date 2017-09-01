A total summary aggregates all data by columns. You can associate each column with one or more summary items of different types.

![DevExtreme HTML5/JavaScript DataGrid Widget Total Summary](/Content/images/doc/17_2/DataGrid/TotalSummary.png)

Configure each summary item in the **summary**.[totalItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/) array. The basic item configuration requires specifying a [column that provides data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column) and the [aggregate function](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType). Note that each summary item is calculated only for those rows that meet filtering conditions (if a filter is applied).

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: ["OrderNumber", "Price"],
            summary: {
                totalItems: [{
                    column: "OrderNumber",
                    summaryType: "count"
                }, {
                    column: "Price",
                    summaryType: "sum"
                }
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        [columns]="['OrderNumber', 'Price']" >
        <dxo-summary>
            <dxi-total-item
                column="OrderNumber"
                summaryType="count">
            </dxi-total-item>
            <dxi-total-item
                column="Price"
                summaryType="sum">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridSummaries/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

[tags]dataGrid, data grid, total summary, aggregate function, summaryType, alignment, location, showInColumn
