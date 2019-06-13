When implementing a custom aggregate function, use the [aggregationInfo](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Fields/aggregationInfo/) object that is passed to it as the first argument. This object contains information on the aggregation interval for which the function is called and the data objects that fall within this interval. In addition, you can access the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/) object, which is passed to the function as the second argument.

To apply the function, assign it to the series' **aggregation**.[calculate](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate) option and set the **aggregation**.[method](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#method) option to *"custom"*.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/PointsAggregation/jQuery/Light/"
}

In the following code, a custom aggregation function implements the <a href="http://en.wikipedia.org/wiki/Median_filter" target="_blank">median filter</a> algorithm:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            dataSource: [
                { argument: 1, value: 10 },
                // ...
            ],
            series: [{
                argumentField: "argument",
                valueField: "value",
                aggregation: {
                    enabled: true,
                    method: "custom",
                    calculate: function (aggregationInfo) {
                        if (aggregationInfo.data.length) {
                            return {
                                argument: aggregationInfo.intervalStart,
                                value: aggregationInfo.data[Math.floor(aggregationInfo.data.length / 2)].value
                            };
                        }
                    }
                    
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart [dataSource]="data">
        <dxi-series
            argumentField="argument"
            valueField="value">
            <dxo-aggregation
                [enabled]="true"
                method="custom"
                [calculate]="calcMedianFilter">
            </dxo-aggregation>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        data = [
            { argument: 1, value: 10 },
            // ...
        ];
        calcMedianFilter (aggregationInfo) {
            if (aggregationInfo.data.length) {
                return {
                    argument: aggregationInfo.intervalStart,
                    value: aggregationInfo.data[Math.floor(aggregationInfo.data.length / 2)].value
                };
            }
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

