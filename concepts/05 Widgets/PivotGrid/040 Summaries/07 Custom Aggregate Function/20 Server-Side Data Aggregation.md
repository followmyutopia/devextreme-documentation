[note] This article is relevant only for ASP.NET servers.

Follow the instructions below to implement custom server-side data aggregation for a field. You will need the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) library.

1. Set the [remoteOperations](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations) option to **true**.

1. Implement and register a custom server-side data aggregator using **DevExtreme.AspNet.Data** as described in [this article](https://devexpress.github.io/DevExtreme.AspNet.Data/net/api/DevExtreme.AspNet.Data.Aggregation.CustomAggregators.html).

1. Pass the string identifier that you used in registration to the field's [summaryType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType) option:

    ---
    ##### ASP.NET MVC Controls

        <!--Razor C#-->
        @(Html.DevExtreme().PivotGrid()
            .DataSource(ds => ds
                // ...
                .Fields(fields => {
                    fields.Add()
                        // ...
                        .SummaryType("totalSales");
                })
                .RemoteOperations(true)
            )
        )

    ##### jQuery

        <!--JavaScript-->
        $(function() {
            var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
                // ...
                fields: [{
                    // ...
                    summaryType: "totalSales"
                }],
                remoteOperations: true
            });
            $("#pivotGridContainer").dxPivotGrid({
                dataSource: pivotGridDataSource
            });
        });

    ##### Angular  

        <!--TypeScript-->
        import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
        import { DxPivotGridModule } from "devextreme-angular";
        // ...
        export class AppComponent {
            pivotGridDataSource: PivotGridDataSource;
            constructor() {
                this.pivotGridDataSource = new PivotGridDataSource({
                    // ...
                    fields: [{
                        // ...
                        summaryType: "totalSales"
                    }],
                    remoteOperations: true
                });
            }
        }

        @NgModule({
            imports: [
                // ...
                DxPivotGridModule
            ],
            // ...
        })

        <!--HTML-->
        <dx-pivot-grid
            [dataSource]="pivotGridDataSource">
        </dx-pivot-grid>

    ---
    