The **Scatter** series type visualizes data as a collection of scattered points.

<div class="simulator-desktop-container" data-view="/Content/Applications/18_2/DataVisualization/Guides/ChartSeriesTypes/scatter.html, /Content/Applications/18_2/DataVisualization/Guides/ChartSeriesTypes/scatter.js"></div>

To specify the **Scatter** series type, assign *"scatter"* to the **series[]**.[type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) option. You can configure:

- Each series individually using the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array;
- All series in the **Chart** using the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object;
- All **Scatter** series using the **commonSeriesSettings**.**scatter** object.

<!---->

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "scatter"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                scatter: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series type="scatter"></dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-scatter ... ></dxo-scatter>
        </dxo-common-series-settings>
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

Refer to the [ScatterSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/ScatterSeries/) section of the API Reference for a full list of options available to a **Scatter** series.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/Scatter/jQuery/Light/"
}

#####See Also#####
- [Series Points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/)
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
- [Bubble Series](/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/)