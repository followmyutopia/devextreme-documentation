===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom post-processing function for summary values.
<!--/shortDescription-->

<!--fullDescription-->
This and [other post-processing functions](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode) allow you to perform additional calculations on each summary value and take into account neighboring cells' summary values.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                calculateSummaryValue: function (summaryCell) {
                    // Your code goes here
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
                    calculateSummaryValue: function (summaryCell) {
                        // Your code goes here
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

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxPivotGridSummaryCell<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The cell whose summary value is being processed.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Number<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The cell's new summary value.
<!--/typeFunctionReturnDescription-->