===========================================================================
<!--default-->''<!--/default-->
<!--type-->format<!--/type-->
===========================================================================

<!--shortDescription-->
Formats field values before they are displayed.
<!--/shortDescription-->

<!--fullDescription-->
See the [format](/Documentation/ApiReference/Common/Object_Structures/format/) section for details on accepted values.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                format: {
                    type: "largeNumber",
                    precision: 2
                },
                // ===== or a shorter version =====
                format: "largeNumber"
            }]
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
                    format: {
                        type: "largeNumber",
                        precision: 2
                    },
                    // ===== or a shorter version =====
                    format: "largeNumber"
                }]
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    // ...
                    .Format(f => f
                        .Type(Format.LargeNumber)
                        .Precision(2)
                    )
                    // ===== or a shorter version =====
                    .Format(Format.LargeNumber)
            })
        )
    )

---

#####See Also#####
- **fields[]**.[customizeText](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText)
<!--/fullDescription-->