Aggregation methods specify how series points should be aggregated. DevExtreme provides the most commonly used aggregation methods out of the box. To use one, specify a series' **aggregation**.[method](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#method) option. In its description, you will find the full list of provided aggregation methods. Note that different series types have different aggregation methods available.

The following code shows how to specify aggregation methods for each series individually. Data aggregation is [enabled for all series](/Documentation/Guide/Widgets/Chart/Data_Aggregation/#Enable_Data_Aggregation) in the **commonSeriesSettings** object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                aggregation: {
                    enabled: true
                }
            },
            series: [{
                // ...
                type: "line",
                aggregation: {
                    method: "min"
                }
            }, {
                // ...
                type: "bar",
                aggregation: {
                    method: "max"
                }
            }]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-common-series-settings ... >
            <dxo-aggregation
                [enabled]="true">
            </dxo-aggregation>
        </dxo-common-series-settings>

        <dxi-series type="line" ... >
            <dxo-aggregation
                method="min">
            </dxo-aggregation>
        </dxi-series>

        <dxi-series type="bar" ... >
            <dxo-aggregation
                method="max">
            </dxo-aggregation>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
	@NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/PointsAggregation/jQuery/Light/"
}

You can implement a custom aggregate function instead of using an out-of-the-box aggregation method.
