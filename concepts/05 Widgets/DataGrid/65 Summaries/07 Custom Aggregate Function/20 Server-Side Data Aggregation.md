[note] This article applies to ASP.NET servers only.

Follow the instructions below to implement custom server-side data aggregation. This implementation requires the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) library.

1. Set the **remoteOperations**.[summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary) or [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) option to **true**.

1. Implement and register a custom server-side data aggregator using **DevExtreme.AspNet.Data** as described in [this article](https://devexpress.github.io/DevExtreme.AspNet.Data/net/api/DevExtreme.AspNet.Data.Aggregation.CustomAggregators.html).

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
