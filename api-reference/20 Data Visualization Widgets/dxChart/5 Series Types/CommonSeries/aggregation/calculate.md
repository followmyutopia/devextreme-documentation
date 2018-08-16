===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(aggregationInfo, series)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom aggregate function. Applies only if the [aggregation method](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#method) is *"custom"*.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                // ...
                aggregation: {
                    enabled: true,
                    method: "custom",
                    calculate: function (aggregationInfo, series) {
                        var dataObjects = aggregationInfo.data;
                        var result = { }; // or [ ]
                        // ...
                        // Aggregate the data objects here
                        // ...
                        return result;
                    }
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series ... >
            <dxo-aggregation
                [enabled]="true"
                method="custom"
                [calculate]="customAggregateFunc">
            </dxo-aggregation>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customAggregateFunc (aggregationInfo, series) {
            let dataObjects = aggregationInfo.data;
            let result = { }; // or [ ]
            // ...
            // Aggregate the data objects here
            // ...
            return result;
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->aggregationInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->chartPointAggregationInfoObject<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object with information about the aggregation interval and the data objects that fall within it.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->series<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->chartSeriesObject<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The series to which the aggregate function is being applied.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->Object|Array<Object><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
One or several aggregated data objects. Should have the same structure as the original data objects.
<!--/typeFunctionReturnDescription-->