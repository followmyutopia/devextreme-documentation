===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the field should be treated as a measure (a field providing data for calculation).
<!--/shortDescription-->

<!--fullDescription-->
There are no restrictions for rearranging fields in the [areas](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) using the [field chooser](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser). However, we recommend restricting measures to the data area by setting their **isMeasure** option to **true**. You can also set this option to **false** for a non-measure field to prohibit placing it in the data area.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                dataField: "sales",
                area: "data",
                isMeasure: true
            }, {
                dataField: "date",
                dataType: "date",
                area: "column",
                isMeasure: false
            },
            // ...
            ]
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
                    dataField: "sales",
                    area: "data",
                    isMeasure: true
                }, {
                    dataField: "date",
                    dataType: "date",
                    area: "column",
                    isMeasure: false
                },
                // ...
                ]
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
- [Fields and Areas](/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/)
<!--/fullDescription-->
