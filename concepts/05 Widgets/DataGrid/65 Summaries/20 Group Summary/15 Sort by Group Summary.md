Groups are sorted by values of a column they are grouped by. You can also sort them by a group summary item, for example, by the number of records in each group. Specify which summary item to sort by in the [sortByGroupSummaryInfo](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sortByGroupSummaryInfo/) array item's [summaryItem](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sortByGroupSummaryInfo/#summaryItem) field. The **summaryItem** can be the item name, item type, item index or column name. You can change the default sort order using the **sortByGroupSummaryInfo**.[sortOrder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sortByGroupSummaryInfo/#sortOrder) option.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    column: "OrderNumber",
                    summaryType: "count",
                    name: "Total Count"
                }
                // ...
                ]
            },
            sortByGroupSummaryInfo: [{
                summaryItem: "Total Count",  // or "count" | 0 | "OrderNumber"
                sortOrder: "desc"            // or "asc"
            }]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-group-item
                column="OrderNumber"
                summaryType="count"
                name="Total Count">
            </dxi-group-item>
        </dxo-summary>
        <dxi-sort-by-group-summary-info 
            summaryItem="Total Count"  <!-- or "count" | 0 | "OrderNumber" -->
            sortOrder="desc">          <!-- or "asc" -->
        </dxi-sort-by-group-summary-info>
    </dx-data-grid>

---

Summary-based sorting is applied when you group data by any column. If you need to apply it only when a specific column groups data, specify its name in the [groupColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sortByGroupSummaryInfo/#groupColumn) field.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    column: "SaleAmount",
                    summaryType: "max"
                }, {
                    column: "TotalAmount",
                    summaryType: "max"
                }
                // ...
                ]
            },
            sortByGroupSummaryInfo: [{
                summaryItem: "max",  
                groupColumn: "TotalAmount",
                sortOrder: "asc"        
            }, {
                summaryItem: "max",  
                groupColumn: "SaleAmount",
                sortOrder: "desc"
            }]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-group-item
                column="SaleAmount"
                summaryType="max">
            </dxi-group-item>
            <dxi-group-item
                column="TotalAmount"
                summaryType="max">
            </dxi-group-item>
        </dxo-summary>
        <dxi-sort-by-group-summary-info 
            summaryItem="max"  
            groupColumn="TotalAmount"
            sortOrder="asc">         
        </dxi-sort-by-group-summary-info>
        <dxi-sort-by-group-summary-info 
            summaryItem="max"  
            groupColumn="SaleAmount"
            sortOrder="desc">         
        </dxi-sort-by-group-summary-info>
    </dx-data-grid>

---
