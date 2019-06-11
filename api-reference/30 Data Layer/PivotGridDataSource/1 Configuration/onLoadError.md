<!--id-->PivotGridDataSource.Options.onLoadError<!--/id-->
<!--EventForAction-->..\4 Events\loadError.md<!--/EventForAction-->
===========================================================================
<!--type-->function(error)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when data loading fails.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            onLoadError: function (error) {
                console.log(error.message);
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
                onLoadError: (error) => {
                    console.log(error.message);
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
<!--/fullDescription-->
<!--typeFunctionParamName1-->error<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The error.
<!--/typeFunctionParamDescription1-->
