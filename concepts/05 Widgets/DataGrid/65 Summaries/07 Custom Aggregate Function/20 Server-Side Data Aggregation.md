[note] This article applies to ASP.NET servers only.

Follow the instructions below to implement custom server-side data aggregation. This implementation requires the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> library.

1. Set the **remoteOperations**.[summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary), **remoteOperations**.[groupPaging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging), or [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) option to **true**.

1. Implement and register a custom server-side data aggregator using **DevExtreme.AspNet.Data** as described in <a href="https://devexpress.github.io/DevExtreme.AspNet.Data/net/api/DevExtreme.AspNet.Data.Aggregation.CustomAggregators.html" target="_blank">this article</a>.

1. Pass the string identifier you used to register the aggregator to a summary item's [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType) option:

    ---
    ##### ASP.NET MVC Controls

        <!--Razor C#-->
        @(Html.DevExtreme().DataGrid()
            .RemoteOperations(true)
            .Summary(s => s
                .TotalItems(i => {
                    i.Add().SummaryType("totalSales");
                })
            )
        )

    ##### jQuery

        <!--JavaScript-->
        $(function() {
            $("#dataGridContainer").dxDataGrid({
                remoteOperations: true,
                summary: {
                    totalItems: [
                        { summaryType: "totalSales" }
                    ]
                }
            });
        });

    ##### Angular  

        <!--HTML-->
        <dx-data-grid ...
            [remoteOperations]="true">            
            <dxo-summary>
                <dxi-total-item summaryType="totalSales"></dxi-total-item>
            </dxo-summary>
        </dx-data-grid>

        <!--TypeScript-->
        import { DxDataGridModule } from "devextreme-angular";
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxDataGridModule
            ],
            // ...
        })

    ---
