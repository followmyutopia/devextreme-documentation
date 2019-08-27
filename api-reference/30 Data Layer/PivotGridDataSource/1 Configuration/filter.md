---
id: PivotGridDataSource.Options.filter
type: Filter expression
---
---
##### shortDescription
Specifies data filtering conditions. Cannot be used with an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).

---
Possible variants:

* Binary filter

        [ "dataField", "=", 3 ]

* Unary filter

        [ "!", [ "dataField", "=", 3 ] ]

* Complex filter

        [
            [ "dataField", "=", 10 ],
            "and",
            [
                [ "otherDataField", "<", 3 ],
                "or",
                [ "otherDataField", ">", 11 ]
            ]
        ]

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            filter: [ "date", "startswith", "2014" ]
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
                filter: [ "date", "startswith", "2014" ]
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
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)