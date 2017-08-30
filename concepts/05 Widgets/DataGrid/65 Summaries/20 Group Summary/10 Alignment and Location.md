All group items are displayed in parentheses after the group header by default. You can show an item in the column providing data for it by assigning **true** to the [alignByColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#alignByColumn) option. Specify the [showInColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInColumn) option to show it in another column. This option can also be applied to items [shown in the group footer](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter).

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: ["OrderNumber", "City", "Price"],
            summary: {
                groupItems: [{
                    column: "City",
                    summaryType: "count",
                    alignByColumn: true
                }, {
                    column: "Price",
                    summaryType: "sum",
                    showInGroupFooter: true
                }, {
                    column: "Price",
                    summaryType: "max",
                    showInGroupFooter: true,
                    showInColumn: "City"
                },
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        [columns]="['OrderNumber', 'City', 'Price']" >
        <dxo-summary>
            <dxi-group-item
                column="City"
                summaryType="count"
                [alignByColumn]="true">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="sum"
                [showInGroupFooter]="true">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="sum"
                [showInGroupFooter]="true"
                showInColumn="City">
            </dxi-group-item>
        </dxo-summary>
    </dx-data-grid>

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
