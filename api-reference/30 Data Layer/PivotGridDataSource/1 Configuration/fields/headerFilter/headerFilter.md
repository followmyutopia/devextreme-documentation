<!--id-->PivotGridDataSource.Options.fields.headerFilter<!--/id-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the field's header filter.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                allowFiltering: true,
                headerFilter: {
                    allowSearch: true
                }
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
                    allowFiltering: true,
                    headerFilter: {
                        allowSearch: true
                    }
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

---

#####See Also#####
- **fields[]**.[allowFiltering](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering)
- **PivotGrid**.[headerFilter](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/headerFilter/)
<!--/fullDescription-->