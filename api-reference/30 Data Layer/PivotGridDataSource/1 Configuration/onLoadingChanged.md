<!--id-->PivotGridDataSource.Options.onLoadingChanged<!--/id-->
<!--EventForAction-->..\4 Events\loadingChanged.md<!--/EventForAction-->
===========================================================================
<!--type-->function(isLoading)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when the data loading status changes.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            onLoadingChanged: function (isLoading) {
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
                onLoadingChanged: (isLoading) => {
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
<!--/fullDescription-->
<!--typeFunctionParamName1-->isLoading<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Boolean<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Indicates whether data is being loaded.
<!--/typeFunctionParamDescription1-->
