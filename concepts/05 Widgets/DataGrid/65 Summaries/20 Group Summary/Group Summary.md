A group summary aggregates data in groups by columns. You can associate each column with one or more summary items of different types.

![DevExtreme HTML5/JavaScript DataGrid Widget Group Summary](/Content/images/doc/17_1/DataGrid/GroupSummary.png)

Configure each summary item in the **summary**.[groupItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/) array. The simplest item configuration requires a [column that provides data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column) and the [aggregate function](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType) to be specified. Note that each group summary item is calculated only for those rows that meet filtering conditions if a filter is applied.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: ["OrderNumber", "Price"],
            summary: {
                groupItems: [{
                    column: "OrderNumber",
                    summaryType: "count"
                }, {
                    column: "Price",
                    summaryType: "sum"
                }, {
                    column: "Price",
                    summaryType: "max"
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
            <dxi-group-item
                column="OrderNumber"
                summaryType="count">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="sum">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="max">
            </dxi-group-item>
        </dxo-summary>
    </dx-data-grid>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/)

[tags]dataGrid, data grid, group summary, aggregate function, sort by summary, sortByGroupSummaryInfo, summaryType, alignment, location, alignByColumn. showInColumn, showInGroupFooter