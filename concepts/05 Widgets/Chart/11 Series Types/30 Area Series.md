Area series visualize data as an area filled with a color. This area is limited on top by a broken, smooth, or step-like line, which corresponds to the **Area**, **Spline Area**, and **Step Area** series types.

<div class="simulator-desktop-container" data-view="/Content/Applications/18_1/DataVisualization/Guides/ChartSeriesTypes/area.html, /Content/Applications/18_1/DataVisualization/Guides/ChartSeriesTypes/area.js"></div>

Area series also include stacked series types: **Stacked Area** and **Stacked Spline Area**. In such series, the value of each next point is counted off from the previous point with the same argument. As a result, series are put in a stack. Very similar to stacked series are full-stacked series - **Full-Stacked Area** and **Full-Stacked Spline Area**. In these series, the sum of all point values by a given argument is considered 100%, and each individual point value is recalculated to be a share of these 100%.

<div class="simulator-desktop-container" data-view="/Content/Applications/18_1/DataVisualization/Guides/ChartSeriesTypes/stackedarea.html, /Content/Applications/18_1/DataVisualization/Guides/ChartSeriesTypes/stackedarea.js"></div>

To specify one or another series type, assign its name to the **series[]**.[type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type) option. You can configure:

- Each series individually using the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) array;
- All series in the **Chart** using the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object;
- All series of a specific type using objects nested in **commonSeriesSettings**: **area**, **splinearea**, **steparea**, etc.

<!---->

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "area"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                area: { ... },
                splinearea: { ... },
                steparea: { ... },
                stackedarea: { ... },
                stackedsplinearea: { ... },
                fullstackedarea: { ... },
                fullstackedsplinearea: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series type="area"></dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-area ... ></dxo-area>
            <dxo-splinearea ... ></dxo-splinearea>
            <dxo-steparea ... ></dxo-steparea>
            <dxo-stackedarea ... ></dxo-stackedarea>
            <dxo-stackedsplinearea ... ></dxo-stackedsplinearea>
            <dxo-fullstackedarea ... ></dxo-fullstackedarea>
            <dxo-fullstackedsplinearea ... ></dxo-fullstackedsplinearea>
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

Refer to the [Series Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/) section of the API Reference for a full list of options available to a specific series type.

<a href="/Demos/WidgetsGallery/Demo/Charts/Area/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Area Series Demos</a>

#####See Also#####
- [Series](/Documentation/Guide/Widgets/Chart/Series/Overview/)
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
- [Range Series](/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/)