---
id: PivotGridDataSource.Options.onFieldsPrepared
type: function(fields)
EventForAction: PivotGridDataSource.fieldsPrepared
---
---
##### shortDescription
A function that is executed when all fields are loaded from the [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) and they are ready to be displayed in the **PivotGrid**.

##### param(fields): Array<PivotGridDataSource_Options_fields>
All [field configurations](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/).

---
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            onFieldsPrepared: function (fields) {
                // Your code goes here
            }
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
                onFieldsPrepared: (fields) => {
                    // Your code goes here
                }
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