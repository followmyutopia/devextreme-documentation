<!--id-->PivotGridDataSource.Options.fields.filterValues<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<any><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the values by which the field is filtered.
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
                filterType: "exclude",
                filterValues: [[2015], [2016]]
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
                    filterType: "exclude",
                    filterValues: [[2015], [2016]]
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
- **fields[]**.[filterType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterType)
- **fields[]**.[allowFiltering](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering)
<!--/fullDescription-->