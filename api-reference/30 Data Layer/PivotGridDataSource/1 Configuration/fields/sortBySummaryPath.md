<!--id-->PivotGridDataSource.Options.fields.sortBySummaryPath<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<Number, String><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a path to the column or row whose summary values should be used to sort the field's values in the [headers](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers).
<!--/shortDescription-->

<!--fullDescription-->
This and the [sortBySummaryField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField) options are applied together. If this option is not specified, the field's values are sorted by the [grand totals](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals) of the measure that **sortBySummaryField** specifies.

In the following example, geographic regions displayed in the row header are sorted by sales in the second quarter of 2015:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                caption: "Sales",
                dataField: "sales",
                area: "data",
                isMeasure: true,
                summaryType: "sum"
            }, {
                caption: "Date",
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                caption: "Region",
                dataField: "region",
                area: "row",
                sortBySummaryField: "Sales",
                sortBySummaryPath: [2015, 2]
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
                    caption: "Sales",
                    dataField: "sales",
                    area: "data",
                    isMeasure: true,
                    summaryType: "sum"
                }, {
                    caption: "Date",
                    dataField: "date",
                    dataType: "date",
                    area: "column"
                }, {
                    caption: "Region",
                    dataField: "region",
                    area: "row",
                    sortBySummaryField: "Sales",
                    sortBySummaryPath: [2015, 2]
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
- [Sorting by Summary Values](/Documentation/Guide/Widgets/PivotGrid/Sorting/#Sorting_in_Code/Sorting_by_Summary_Values)
<!--/fullDescription-->